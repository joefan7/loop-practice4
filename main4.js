var months = [{
    name: 'January',
    days: 31
}, {
    name: 'February',
    days: 28
}, {
    name: 'March',
    days: 31
}, {
    name: 'April',
    days: 30
}, {
    name: 'May',
    days: 31
}, {
    name: 'June',
    days: 30
}, {
    name: 'July',
    days: 31
}, {
    name: 'August',
    days: 31
}, {
    name: 'September',
    days: 30
}, {
    name: 'October',
    days: 31
}, {
    name: 'November',
    days: 30
}, {
    name: 'December',
    days: 31
}];

// output - Days of the month
console.log('#1 January 1 January 2 etc...')
for(var i=0; i < months.length; i++) {
    for(var j=0; j < months[i].days; j++){
    console.log(months[i].name,' ',j+1);
    }
}

// output - Each Second of each hour in a day
console.log('#2 Each Second of each hour in a day')
for(var i=0; i < 24; i++) {
    for(var j=0; j < 60; j++){
        for(var k=0; k < 60; k++){
            console.log(i + ':' + j + ':' + k)
        }
    }
}

// output - Bonus #1 12 hour clock and AM/PM
console.log('Bonus #1 12 hour clock and AM/PM')
for (var hours = 0; hours < 24; hours++) {
    for (var min = 0; min < 60; min++) {
        for (var sec = 0; sec < 60; sec++) {
            if (hours >= 12) {
                if (hours == 12) {
                    console.log(hours + ':' + min + ':' + sec + ' ' + 'PM')
                } else {
                    console.log((hours - 12) + ':' + min + ':' + sec + ' ' + 'PM')
                }
            } else {
                if (hours == 0) {
                    console.log((hours + 12) + ':' + min + ':' + sec + ' ' + 'AM')
                } else
                    console.log(hours + ':' + min + ':' + sec + ' ' + 'AM')
            }
        }
    }
}

function pad(num, size) {
    var s = "0" + num;
    return s.substr(s.length-size);
}

// output - Bonus #2 12 hour clock and AM/PM with leading zeroes
console.log('Bonus #2 12 hour clock and AM/PM with leading zeroes')
for (var hours = 0; hours < 24; hours++) {
    for (var min = 0; min < 60; min++) {
        for (var sec = 0; sec < 60; sec++) {
            if (hours >= 12) {
                if (hours == 12) {
                    console.log(pad(hours,2) + ':' + pad(min,2) + ':' + pad(sec,2) + ' ' + 'PM')
                } else {
                    console.log((pad(hours - 12,2)) + ':' + pad(min,2) + ':' + pad(sec,2) + ' ' + 'PM')
                }
            } else {
                if (hours == 0) {
                    console.log((pad(hours + 12,2)) + ':' + pad(min,2) + ':' + pad(sec,2) + ' ' + 'AM')
                } else
                    console.log(pad(hours,2) + ':' + pad(min,2) + ':' + pad(sec,2) + ' ' + 'AM')
            }
        }
    }
}