document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('game-board');
    const resetBtn = document.getElementById('reset-btn');
    const status = document.getElementById('status');
    let currentPlayer = 'X';
    let cells = Array.from({ length: 9 });

    // Create game board
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => handleCellClick(i));
        board.appendChild(cell);
        cells[i] = cell;
    }

    // Handle cell click
    function handleCellClick(index) {
        const cell = cells[index];
        if (!cell.textContent) {
            cell.textContent = currentPlayer;
            if (checkWinner()) {
                status.textContent = `Player ${currentPlayer} wins!`;
                disableBoard();
            } else if (checkDraw()) {
                status.textContent = "It's a draw!";
                disableBoard();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    // Check for a winner
    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        return winningCombos.some(combo => {
            const [a, b, c] = combo;
            return cells[a].textContent &&
                cells[a].textContent === cells[b].textContent &&
                cells[a].textContent === cells[c].textContent;
        });
    }

    // Check for a draw
    function checkDraw() {
        return cells.every(cell => cell.textContent);
    }

    // Disable the game board
    function disableBoard() {
        cells.forEach(cell => {
            cell.removeEventListener('click', () => handleCellClick());
        });
    }

    // Reset the game board
    function resetBoard() {
        cells.forEach(cell => {
            cell.textContent = '';
            cell.addEventListener('click', () => handleCellClick());
        });
        currentPlayer = 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
    }

    // Reset game button
    resetBtn.addEventListener('click', resetBoard);
});
