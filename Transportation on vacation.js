function rentalCarCost(d) {
  let price = 40;
  if (d <= 2) {
    return d * price;
  }
  else if (d >= 3 && d <7) {
    return d * price -20;
  }
  else if (d >=7) {
    return d * price -50;
  }
}

function rentalCarCost(d) {
  if(d<3) return d * 40;
  if(7>d && d>=3) return (d*40 -20);
  if(d>=7) return (d*40 -50);
}


function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}