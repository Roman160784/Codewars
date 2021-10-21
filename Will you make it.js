const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 let result = mpg * fuelLeft;
  if (result == distanceToPump){
    return true;
  }
  else {
    return false;
  }
};