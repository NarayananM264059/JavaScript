document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');
    const resultContainer = document.getElementById('result');
    const resetBtn = document.getElementById('reset-btn');
    const gridSize = 10;
    const numMines = 10;
    let grid = [];

    // Initialize the game
    initializeGame();

    // Event listener for reset button
    resetBtn.addEventListener('click', () => {
        resetGame();
    });

    function initializeGame() {
        // Clear game container
        gameContainer.innerHTML = '';

        // Reset result
        resultContainer.textContent = '';

        // Initialize grid
        grid = [];
        for (let i = 0; i < gridSize; i++) {
            const row = [];
            for (let j = 0; j < gridSize; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', handleCellClick);
                gameContainer.appendChild(cell);
                row.push({ mine: false, revealed: false });
            }
            grid.push(row);
        }

        // Place mines randomly
        for (let i = 0; i < numMines; i++) {
            const row = Math.floor(Math.random() * gridSize);
            const col = Math.floor(Math.random() * gridSize);
            grid[row][col].mine = true;
        }
    }

    function handleCellClick(event) {
        const cell = event.target;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        if (!grid[row][col].revealed) {
            if (grid[row][col].mine) {
                cell.classList.add('mine');
                revealAllMines();
                resultContainer.textContent = 'Game Over! You clicked on a mine.';
            } else {
                const numAdjacentMines = countAdjacentMines(row, col);
                cell.textContent = numAdjacentMines > 0 ? numAdjacentMines : '';
                cell.classList.add('revealed');
                grid[row][col].revealed = true;
            }
        }
    }

    function countAdjacentMines(row, col) {
        let count = 0;
        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i < gridSize && j >= 0 && j < gridSize && grid[i][j].mine) {
                    count++;
                }
            }
        }
        return count;
    }

    function revealAllMines() {
        grid.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                if (cell.mine) {
                    const mineCell = gameContainer.querySelector(`[data-row="${rowIndex}"][data-col="${colIndex}"]`);
                    mineCell.classList.add('revealed');
                }
            });
        });
    }

    function resetGame() {
        initializeGame();
    }
});
