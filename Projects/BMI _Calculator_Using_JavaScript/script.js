function calculateBMI() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert('Please enter valid height and weight');
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    const bmiRounded = bmi.toFixed(2);

    let classification = '';

    if (bmi < 18.5) {
        classification = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = 'Overweight';
    } else {
        classification = 'Obesity';
    }

    const resultText = `Your BMI is ${bmiRounded} (${classification}).`;
    document.getElementById('result').textContent = resultText;
}
