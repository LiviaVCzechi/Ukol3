//Ükol č. 07

function JustFood(numPeople) {
    return `Catering od Just Food pro ${numPeople} lidí za ${numPeople * 500} Kč`;  
}

console.log(JustFood(100));

function YourMamma(numPeople) {
    return `Your Mamma pro ${numPeople} lidí za ${numPeople * 1000} Kč`;
}

console.log(YourMamma(100))

function FlavourHaven(numPeople) {
    return `Catering od Flavour Haven pro ${numPeople} lidí za ${numPeople * 3000} Kč`;
  
}

console.log(FlavourHaven(100));


function createEvent(eventName, numPeople, cateringFunction) {
    const catering = cateringFunction(numPeople);
    return `Událost ${eventName} s ${catering}`;
}

console.log(createEvent("Inaugurace prezidenta", 100, FlavourHaven));








