function strCount(str, letter){  
  //code here
return str.split(letter).length-1
}

function strCount(str, letter){  
 let arr = str.split("");
  let count = 0;

  for (let i=0; i<arr.length; i++) {
      if (arr[i].includes(letter)) {
      count++;
    }
  }

  return count
}


