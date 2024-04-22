function calculateBMI() {
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round BMI to 2 decimal places

    let resultText = 'Your BMI is ' + bmi + '. ';

    if (bmi < 18.5) {
        resultText += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 25) {
        resultText += 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 30) {
        resultText += 'You are overweight.';
    } else {
        resultText += 'You are obese.';
    }

    document.getElementById('result').innerText = resultText;
}