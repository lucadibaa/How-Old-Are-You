//Your Age In Years, Months and Days

function ageInString() {
    var birthYear = prompt("What's your birth year?"); //What year were you born?
    var birthMonth = prompt("What's your birth month?");
    var birthDay = prompt("What's your birth day?");

    //get today date
    var date = new Date(),
        year = date.getFullYear(),
        month = (date.getMonth()) + 1,
        day = date.getDate();

    console.log(date);
    console.log(day);
    console.log(month);
    console.log(year);

    //calc passed years
    var yearAge = year - birthYear;

    //calc passed months
    if ( month >= birthMonth ) {
        var monthAge = month - birthMonth;
    } else {
        yearAge--;
        var monthAge = 12 + month - birthMonth;
    }

    //calc passed days
    if ( day >= birthDay ) {
        var dayAge = day - birthDay;
    } else {
        monthAge--;
        var dayAge = 31 + day - birthDay;
    }

    //fix negative month
    if ( monthAge < 0 ) {
        monthAge = 11;
        yearAge--;
    }

    //create a string with age in years, months and days
    var age = {
        years: yearAge,
        months: monthAge,
        days: dayAge
    };

    //nice output strings
    var ageString = "";

    if ( yearAge > 0 && monthAge > 0 && dayAge > 0 ) {
        ageString = 'You are ' + yearAge + ' years, ' + monthAge + ' months and ' + dayAge + ' days old.';
    } else if ( yearAge == 0 && monthAge > 0 && dayAge > 0 ) {
        ageString = 'You are only ' + monthAge + ' months and ' + dayAge + ' days old.';
    } else if ( yearAge == 0 && monthAge == 0 && dayAge > 0 ) {
        ageString = 'You are only ' + dayAge + ' days old.';
    } else if ( yearAge > 0 && monthAge == 0 && dayAge == 0 ) {
        ageString = 'You are ' + yearAge + ' years old, Happy Birthday!'
    } else if ( yearAge > 0 && monthAge > 0 && dayAge == 0 ) {
        ageString = 'You are ' + yearAge + ' years and ' + monthAge + ' months old.';
    } else if ( yearAge > 0 && monthAge == 0 && dayAge > 0 ) {
        ageString = 'You are ' + yearAge + ' years and ' + dayAge + ' days old.';
    } else if ( yearAge == 0 && monthAge > 0 && dayAge == 0 ) {
        ageString = 'You are ' + monthAge + ' months old.';
    } else if ( yearAge == 0 && monthAge == 0 && dayAge == 0 ) {
        ageString = "Welcome to Earth!"
    }
    console.log(ageString);

    //show result on actual page
    var h3 = document.createElement('h3');
    var answer = document.createTextNode(ageString);    //definisce il risultato
    h3.setAttribute('id', 'ageString');
    h3.appendChild(answer);                             //applica il risultato all'elemento l'h3
    document.getElementById('result').appendChild(h3);  //applica l'h3(e quindi il risultato) all'id result(vedi HTML)      
}

function reset() {
    document.getElementById('ageString').remove();         //rimuove l'id result(vedi HTML) e quindi l'h3 contenente il risultato
}

//Your Age In Days

function ageInDays() {
    var birthYear = prompt("What's your birth year?"); //What year were you born?
    var birthMonth = prompt("What's your birth month?");
    var birthDay = prompt("What's your birth day?");

    //get today date
    var date = new Date(),
        year = date.getFullYear(),
        month = (date.getMonth()) + 1,
        day = date.getDate();

    console.log(date);
    console.log(day);
    console.log(month);
    console.log(year);

    //calc passed years
    var yearAge = year - birthYear;

    //calc passed months
    if ( month >= birthMonth ) {
        var monthAge = month - birthMonth;
    } else {
        yearAge--;
        var monthAge = 12 + month - birthMonth;
    }

    //calc passed days
    if ( day >= birthDay ) {
        var dayAge = day - birthDay;
    } else {
        monthAge--;
        var dayAge = 31 + day - birthDay;
    }

    //fix negative month
    if ( monthAge < 0 ) {
        monthAge = 11;
        yearAge--;
    }

    //calc age in days
    var ageinDays = ( (yearAge * 365) + (monthAge * 30) + dayAge);

    console.log(ageinDays);

    //show result on actual page
    var h4 = document.createElement('h3');
    var answer2 = document.createTextNode('You are ' + ageinDays + ' days old.');       //definisce il risultato
    h4.setAttribute('id', 'ageInDays');
    h4.appendChild(answer2);                                //applica il risultato all'elemento l'h3
    document.getElementById('days-result').appendChild(h4); //applica l'h3(e quindi il risultato) all'id result(vedi HTML)
}

function reset2() {
    document.getElementById('ageInDays').remove();         //rimuove l'id result(vedi HTML) e quindi l'h3 contenente il risultato
    //location.reload();
}