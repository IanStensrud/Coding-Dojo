var cities = [
    'burbank',
    'chicago',
    'dallas'
];
var citiesSelected = [
    document.querySelector('.burbank'),
    document.querySelector('.chicago'),
    document.querySelector('.dallas')
];
var fTemps = [
    75,
    65,
    80,
    66,
    69,
    61,
    78,
    70
];

var cTemps = [
    24,
    18,
    27,
    19,
    21,
    16,
    26,
    21    
];

var todaysTemps = [[24, 18], [75, 65]];
var tomorrowsTemps = [[27, 19], [80, 66]];
var fridaysTemps = [[21, 16], [69, 61]];
var saturdaysTemps = [[26, 21], [78, 70]];



function loadReport(element) {
    alert('Loading weather report for ' + citiesSelected[element].innerText + "...");
}

function removeCookiePop() {
    document.querySelector('.cookie-popup').remove();
}

function changeTemps(element) {
    
    if (element == 0) {
        document.getElementById('todays-1').innerText = cTemps[0] + "°";
        document.getElementById('todays-2').innerText = cTemps[1] + "°";
        document.getElementById('tomorrows-1').innerText = cTemps[2] + "°";
        document.getElementById('tomorrows-2').innerText = cTemps[3] + "°";
        document.getElementById('fridays-1').innerText = cTemps[4] + "°";
        document.getElementById('fridays-2').innerText = cTemps[5] + "°";
        document.getElementById('saturdays-1').innerText = cTemps[6] + "°";
        document.getElementById('saturdays-2').innerText = cTemps[7] + "°";
        console.log(element);
        
    }

    if (element == 1) {
        document.getElementById('todays-1').innerText = fTemps[0] + "°";
        document.getElementById('todays-2').innerText = fTemps[1] + "°";
        document.getElementById('tomorrows-1').innerText = fTemps[2] + "°";
        document.getElementById('tomorrows-2').innerText = fTemps[3] + "°";
        document.getElementById('fridays-1').innerText = fTemps[4] + "°";
        document.getElementById('fridays-2').innerText = fTemps[5] + "°";
        document.getElementById('saturdays-1').innerText = fTemps[6] + "°";
        document.getElementById('saturdays-2').innerText = fTemps[7] + "°";
        console.log(element);
    }
    
}