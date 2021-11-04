function sumMix(x){
return Number(x.reduce((a,b)=>Number(a)+Number(b)))
}

function sumMix(x){
  let result = 0;
  for (let n of x) {
    result += parseInt(n);
  }
  return result;
}

function sumMix(x){
  var somme = 0;
  for (i = 0; i<x.length; i++) {
    somme += Number(x[i]);
  }
  return somme;
}