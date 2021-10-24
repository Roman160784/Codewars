function usdcny(usd) {
  let cny = usd * 6.75;
  let rate = cny.toFixed(2);
  rate = String(rate);
  return rate + ' Chinese Yuan';
}

let usdcny = (usd) => {
    return (usd * 6.75).toFixed(2) + ' Chinese Yuan'
  }