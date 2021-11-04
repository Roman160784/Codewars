function well(x) {
  const count = x.reduce((s, v) => s + (v == 'good'), 0);
  return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
}


function well(x){
  let res = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i] == 'good') {
      res.push(x[i]);
    }
  }
  return res.length > 2 ? 'I smell a series!'
  : res.length > 0 && res.length <= 2 ? 'Publish!' : 'Fail!';
}