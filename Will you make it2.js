const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
 let result = mpg * fuelLeft;
  if (result == distanceToPump){
    return true;
  }
  else if (result > distanceToPump){
    return true;
  }
  else if (result < distanceToPump){
    return false;
  }
};
