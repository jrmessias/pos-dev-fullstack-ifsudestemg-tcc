function currentDateToArray() {
    const currentDate = new Date(); // Creates a Date object for the current time

    return [
        currentDate.getFullYear(),  // Year (e.g., 2025)
        currentDate.getMonth(),     // Month (0-based, so January is 0, December is 11)
        currentDate.getDate(),      // Day of the month (1-31)
        currentDate.getHours(),     // Hours (0-23)
        currentDate.getMinutes(),   // Minutes (0-59)
        currentDate.getSeconds(),   // Seconds (0-59)
        currentDate.getMilliseconds() // Milliseconds (0-999)
    ];
}

module.exports = currentDateToArray;
