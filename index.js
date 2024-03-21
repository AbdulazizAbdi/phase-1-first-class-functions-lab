const returnFirstTwoDrivers = function(firstTwoDriverNames){
    return firstTwoDriverNames.slice(0,2)
}

//console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const returnLastTwoDrivers = function(lastTwoDriverNames){
    return lastTwoDriverNames.slice(2)
}

//console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']))

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
]

function createFareMultiplier(fare){
    return function fareCalculator (fareTimes = 4) {return fare * fareTimes};
}


const doubleFare = createFareMultiplier(2);

function fareDoubler(farePrice){
    return doubleFare(farePrice);
}


const tripleFare = createFareMultiplier(3);

function fareTripler(newFarePrice){
    return tripleFare(newFarePrice);
}

function selectDifferentDrivers(arrayOfDrivers, selectingChoice){
    if (selectingChoice === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else if (selectingChoice === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}
