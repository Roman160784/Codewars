function isDivisible(n, x, y) { 
  if (n % x == 0 && n % y == 0){
    return true;
  }
  return false;
}

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}