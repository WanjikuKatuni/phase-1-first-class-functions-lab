// Code your solution in this file!

const drivers = ['Antonia', 'Nuru','Amari', 'Mo']


const returnFirstTwoDrivers = function (){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// const createFareMultiplier = function(){
//     return function fareMultiplier(num1){
//             num1*4;
//     }
//     return fareMultiplier();
// }

// function createFareMultiplier(num1,num2=5){
//     return function fareMultiplier(){
//         return num1*num2;
//     };
// }

function createFareMultiplier(num1){
    return function fareMultiplier(fare){
        return fare*num1
    }
}

createFareMultiplier(5,5);

// function fareDoubler(createFareMultiplier){
//     return createFareMultiplier * 2 
//     }


const fareCalculator = createFareMultiplier(2)

function fareDoubler(fare){
    return fareCalculator(fare)
}

fareDoubler(2);


// function fareTripler(createFareMultiplier){
//     return createFareMultiplier *3
// }

const fareCalculatorTrippler = createFareMultiplier(3);
function fareTripler(fare){
    return fareCalculatorTrippler(fare);
}
fareTripler(4);

// const selectDifferentDrivers = function(){
//     returnFirstTwoDrivers();
//     returnLastTwoDrivers();
// }

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}