// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers= (arr) => {
    return [arr[0], arr[1]];
};
const returnLastTwoDrivers= (arr) => {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
    console.log(selectingDrivers[0],[1]);

function createFareMultiplier(integer){
    return function(fare){
        return fare * integer
    };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectingDrivers){
    return selectingDrivers(drivers);
}

