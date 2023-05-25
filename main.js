// 1
// let halloween = (date) => {
//     return (date.getMonth() + 1) == 10 && (date.getDate()) == 31? "Bonfire toffee":"toffee"
// }

// console.log(halloween(new Date("2013/10/31")));
// console.log(halloween(new Date("2012/07/31")));
// console.log(halloween(new Date("2011/10/12")));

// 2
// let centuryFromYear = (n) => {
    // return Math.ceil(n / 100)
// }

// console.log(centuryFromYear(2000));
// console.log(centuryFromYear(1950));
// console.log(centuryFromYear(1900));

// 3
// let monthName = (n) => {
//     let month = ["Januar", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//     return month.at(n - 1)
// }

// console.log(monthName(3));
// console.log(monthName(12));
// console.log(monthName(6));

// 4
// let afterNMonths = (y, m) => {
//     return y + Math.floor(m / 12);
// }

// console.log(afterNMonths(2020, 24));
// console.log(afterNMonths(1832, 2));
// console.log(afterNMonths(1444, 60));

// 5
// let formatDate = (str) => {
//     return str.split('/').reverse().join('')
// }

// console.log(formatDate("11/12/2019"));
// console.log(formatDate("12/31/2019"));
// console.log(formatDate("01/15/2019"));

// 6
// let hasFriday13 = (m, y) => {
//     let date = new Date(y, m - 1, 13)
//     return date.getDay() == 5
// }

// console.log(hasFriday13(3, 2020));
// console.log(hasFriday13(10, 2017));
// console.log(hasFriday13(1, 1985));

// 7
// let timeForMilkAndCookies = (date) => {
//     return date.getMonth() == 11 && date.getDate() == 24 ? true : false;
// }

// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));

// 8
// let longestTime = (hour, minute, second) => {
//     let h = hour * 3600, m = minute * 60
//     let mx = Math.max(h, m, second)
//     return mx == h?hour:mx == m?minute:second
// }

// console.log(longestTime(1, 59, 3598));
// console.log(longestTime(2, 300, 15000));
// console.log(longestTime(15, 955, 59400));

// 9
// let getDay = (str) => {
//     let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
//     let arr = str.split('/')
//     let date = new Date(arr[2], arr[1] - 1, arr[0])
//     return week[(date.getDay() + 1) % 7]
// }

// console.log(getDay("12/07/2016"));
// console.log(getDay("09/04/2016"));
// console.log(getDay("12/08/2011"));