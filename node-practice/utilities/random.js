let random = function (num1, num2) {
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
}

module.exports = random;