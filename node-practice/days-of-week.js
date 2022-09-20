// require('./script')
// console.log(module);

module.exports.school = "PerScholas";

module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// let daysOfWeekArr = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
// module.exports = daysOfWeekArr;

module.exports.getWeekday = function(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return this.weekdays[dayNo];
}


// function getWeekday(dayNo) {
//     if (dayNo < 0 || dayNo > 6) dayNo = 0;
//     return this.weekdays[dayNo];
// }


// module.exports = {
//     school,
//     weekdays,
//     getWeekday
// }