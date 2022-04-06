function scuberGreetingForFeet(depthInFeet){
    if (depthInFeet <= 400) {
    return 'This one is on me!'; }
    else if (depthInFeet <= 2000) {
    return 'That will be twenty bucks.'; }
    else if (depthInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.'; }
    else {
    return 'No can do.'; }
}

function ternaryCheckCity(city) {
    let cityMessage = (city === 'NYC' ? 'Ok, sounds good.' : "No go.")
    return cityMessage
}

function switchOnCharmFromTip(tip){
    switch (tip) {
    case 'generous':
    return ('Thank you so much.');
    case 'not as generous':
    return ('Thank you.');
    default: 
    return ('Bye.');
    }
}