const { nextISSTimesForMyLocation } = require('./iss_promised');
const { printPassTimes } = require('./print');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

  