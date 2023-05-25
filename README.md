# Data and time
    In JavaScript, date and time are represented by the Date object. The Date object
    provides the date and time information and also provides various methods.
    A JavaScript date defines the EcmaScript epoch that represents milliseconds
    since 1 January 1970 UTC. This date and time is the same as the UNIX epoch
    (predominant base value for computer-recorded date and time values).

# Creating Date Objects
there are four ways to create a date object:
1. new Date ()
1. new Date (milliseconds)
1. new Date (Date string)
1. new Date(year, month, day, hours, minutes seconds, milliseconds)

# new Date()
You can create a date object using the new Date() constructor. For example:
    
    const timeNow = new Date()
    console.log(timeNow)

# new Date(milliseconds)
A Date object contains a number representing milliseconds since January 1, 1970 UTC. New Date(milliseconds) Creates a new Date object by adding milliseconds to the zero time. For example:

    const time1 = new Date(0)

    // epoch time
    console.log(time1) // Thu Jan 01 1970 05:30:00

    // 100000000000 milliseconds after the epoch time 
    const time2 = new Date(100000000000)
    console.log(time2) // Sat Mar 03 1973 15:16:40

# new Date (date string)
New Date - (date string) creates a new date object from the date string.In JavaScript, there are generally three date input formats. ISO Date Formats You can create a date object by passing ISO date formats. For example:

    // ISO Date (International Standard)
    const date = new Date("2022-02-16")

    // the result date will be according to UTC
    console.log(date)

    //const date2 = new Date("2022-02")
    console.log(date2)

    const date3 = new Date("2022")
    console.log(date3)
    // you can also pass specific time to ISO dates.
    const date4 = new Date("2001-12-09T11:00:00Z")
    console.log(date4)

# new Date (year, month, day, hours, minutes, seconds, milliseconds)

new Date(year, month,...) creates a new date object with the specified date
and time. For example:
    
    //new Date(year, month,...) creates a new date object by passing specific date and time. example:
    const time1 = new Date (2020, 1, 20, 4, 12, 11, 0)
    console.log(time1)
    // if four numbers are passed, it represents year, month, day and hours. For example:
    const time2 = new Date(2020, 1, 20, 4)
    console.log(time2)

    const time3 = new Date(2020, 1)
    console.log(time3)
Note: If you pass only one argument, it will count as milliseconds. Therefore, to use this date format, you must pass two arguments. In JavaScript, months are counted from 0 to 11. January is 0 and December is 11.

# Date methods
1. now()
    
        Date.now() returns the number of milliseconds since January 1, 1970.

1. getFullYear()

        getFullYear() returns the full year of a date (4 digits).

1. getMonth()

        getMonth() returns the month (0 to 11) of the date. January = 0, February = 1, ..

1. getDate()

        The getDate() method returns the day of the month (1 to 31) of the date.

1. getHours()
        
        getHours() returns the hours (0 to 23) of a date

1. getMinutes()

        getMinutes() returns the minutes (0 to 59) of a date.

1. getUTCDate()

        getUTCDate() returns the day of the month (1 to 31) of a date object.
        getUTCDate() returns the date in UTC.

1. setFullYear()

        setFullYear() sets the year of the date.
        setFullYear() can also set the month and day.

1. setMonth()

        The setMonth() method sets the month of the date object.
        This method can also be used to set the day of the month.

1. setDate()

        setDate() sets the day month of the date.

1. setUTCDate()

        The setUTCDate() method sets the date of the Date object according to UTC.
