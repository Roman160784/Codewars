function pointsPer48(ppg, mpg) {
 return mpg?Number((ppg/mpg*48).toFixed(1)):0;
}


function pointsPer48(ppg, mpg) {
  var num = (48/mpg) * ppg
  return +num.toFixed(1) || 0
}