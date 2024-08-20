function generateRandomNumber() {
    var min = parseInt(document.getElementById('minValue').value);
    var max = parseInt(document.getElementById('maxValue').value);
    var resultElement = document.getElementById('result');

    if (isNaN(min) || isNaN(max) || min > max) {
        resultElement.textContent = "Please enter valid numbers.";
    } else {
        var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        resultElement.textContent = "Generated Number: " + randomNumber;
    }
}
