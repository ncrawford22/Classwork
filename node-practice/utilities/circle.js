const area = (radius) => {
    return Math.PI * Math.pow(radius, 2);
}

const circumference = (radius) => {
    return 2 * Math.PI * radius;
}

module.exports = {
    area: area,
    circumference: circumference
}