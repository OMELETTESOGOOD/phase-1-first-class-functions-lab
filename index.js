const returnFirstTwoDrivers = function returnFirstTwoDrivers(drivers){
    return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectingFunction) {
  return selectingFunction(drivers);
};
