var longMonths = [1, 3, 5, 7, 8, 10, 12],
    shortMonths = [4, 6, 9, 11],
    longMonthDays = 31,
    shortMonthDays = 30,
    feb = 2,
    userMonth = Number(prompt("Enter a Month:")),
    userDay = Number(prompt("Enter a Day:")),
    userYear = Number(prompt("Enter a Year:")), 
    longMonth,
    febMonth,
    shortMonth;

    eval(userMonth, userDay, userYear);

    function eval(userInputMonth, userInputDay, userInputYear) {

        longMonth = [],
        shortMonth = [],
        febMonth = [];

        if((userInputYear.toString()).length != 4){
            alert("This is an invalid year.")
        }

        longMonths.forEach(function (item) {
            if (item == userInputMonth) {
                longMonth.push(item);
                longMonth.push(userInputDay);
                longMonth.push(userInputYear);
            }
        });

        shortMonths.forEach(function (item) {
            if (item == userInputMonth) {
                shortMonth.push(item);
                shortMonth.push(userInputDay);
                shortMonth.push(userInputYear);
            }
        });

        if (userInputMonth == feb && userInputDay == 29 && ((userInputYear%4 == 0 && userInputYear%100 != 0) || userInputYear%400 == 0)){
            febMonth.push(userInputMonth);
            febMonth.push(userInputDay);
            febMonth.push(userInputYear);
            alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
        }else if(userInputMonth == feb && userInputDay <= 28 && userInputDay >= 1){
            alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
        }else if(userInputMonth == feb){
            alert("This is an invalid date.")
            }

        if (userInputMonth > 12 || userInputMonth < 1){
            alert("This is an invalid month.")
        }else if(longMonth.length > 0){
            if (userInputDay > longMonthDays || userInputDay < 1){
                alert("This is an invalid day.")
            }else{
                alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
            }
        }else if(shortMonth.length > 0){
            if (userInputDay > shortMonthDays || userInputDay < 1){
                alert("This is an invalid day.")
            }else{
            alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
            }
        }
    }


    console.log(longMonth);
    console.log(febMonth);
    console.log(shortMonth);