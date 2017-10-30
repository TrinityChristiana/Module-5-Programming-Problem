//Declare variables
    //Months with 31 days
var longMonths = [1, 3, 5, 7, 8, 10, 12],
    //Months with 30 days
    shortMonths = [4, 6, 9, 11],
    //Clarifies that long months have 31 days
    longMonthDays = 31,
    //Clarifies that short months have 30 days    
    shortMonthDays = 30,
    feb = 2,
    //Functions get user input
    userMonth = Number(prompt("Enter a Month:")),
    userDay = Number(prompt("Enter a Day:")),
    userYear = Number(prompt("Enter a Year:")), 
    longMonth,
    febMonth,
    shortMonth;
    eval(userMonth, userDay, userYear);

    //Validates User Input
    function eval(userInputMonth, userInputDay, userInputYear) {

        //Initiates variables as arrays
        longMonth = [],
        shortMonth = [],
        febMonth = [];
        
        //Validates year to be 4 digits
        if((userInputYear.toString()).length != 4){
            alert("This is an invalid year.")
        }

        //If user inputed a long month, this pushs the data inputed into the long month array.
        longMonths.forEach(function (item) {
            if (item == userInputMonth) {
                longMonth.push(item);
                longMonth.push(userInputDay);
                longMonth.push(userInputYear);
            }
        });

        //If user inputed a short month, this pushs the data inputed into the short month array.
        shortMonths.forEach(function (item) {
            if (item == userInputMonth) {
                shortMonth.push(item);
                shortMonth.push(userInputDay);
                shortMonth.push(userInputYear);
            }
        });

        //Checks Feburary date if leap year
        if (userInputMonth == feb && userInputDay == 29 && ((userInputYear%4 == 0 && userInputYear%100 != 0) || userInputYear%400 == 0)){
            febMonth.push(userInputMonth);
            febMonth.push(userInputDay);
            febMonth.push(userInputYear);
            alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
        //Checks Feburary date if not leap year
        }else if(userInputMonth == feb && userInputDay <= 28 && userInputDay >= 1){
            alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
        //Shows error message if Feburary date is invalid.
        }else if(userInputMonth == feb){
            alert("This is an invalid date.")
            }

        //Checks to make sure month is 1-12   
        if (userInputMonth > 12 || userInputMonth < 1){
            alert("This is an invalid month.")
        //Displays error message if month is a long month and the days are greater than 31 or less than 1   
        }else if(longMonth.length > 0){
            if (userInputDay > longMonthDays || userInputDay < 1){
                alert("This is an invalid day.")
            //Displays message when date is valid
            }else{
                alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
            }
        //Displays error message if month is a short month and the days are greater than 30 or less than 1               
        }else if(shortMonth.length > 0){
            if (userInputDay > shortMonthDays || userInputDay < 1){
                alert("This is an invalid day.")  
            ///Displays message when date is valid
            }else{
            alert(`You entered a valid date: ${userInputMonth}/${userInputDay}/${userInputYear}`)
            }
        }
    }