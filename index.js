// Code your solution in this file!

let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 5)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareInt) {
    return function fareMultiplier(fare) {
        return fareInt * fare
    }
}

const fareDoubler = function (fare) {
    return fare * 2
}

const fareTripler = function (fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, driversFunction) {
    switch (driversFunction) {
        case (driversFunction = returnFirstTwoDrivers):
            return drivers.slice(0, 2)
            break
        case (driversFunction = returnLastTwoDrivers):
            return drivers.slice(2, 5)
            break
    }
}