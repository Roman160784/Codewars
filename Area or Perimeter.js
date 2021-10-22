const areaOrPerimeter = function(l , w) {
  // Return your answer
  let square = 0;
   let rectangle = 0;
  if (l == w) {
    return square = l * w;
  }
  else if (l < w || l > w){
    return rectangle = (l + w) * 2;
}
};