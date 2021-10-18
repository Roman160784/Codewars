function betterThanAverage(classPoints, yourPoints) {
  var sum = 0;
  for (var i = 0; i < classPoints.length; i++){
    sum += classPoints[i];
  }
    sum = sum/classPoints.length
  if(sum > yourPoints) {
    return false
  } else {
    return true
  } 
}