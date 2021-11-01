function digitize(n) {
  let arr = Array.from(String(n), Number);
  let newArr = arr.reverse();
  return newArr; 
}


function digitize(n) {
  return String(n).split('').map(Number).reverse()
}