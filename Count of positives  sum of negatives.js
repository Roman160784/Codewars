function countPositivesSumNegatives (A) {
  if (!A || !A.length) return []

  let pos = A.filter(x=>x>0),
      neg = A.filter(x=>x<=0)

  return [pos.length, Math.floor(neg.reduce((s,v)=>s+v,0))]
}


function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

