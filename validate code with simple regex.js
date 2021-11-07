function validateCode (code) {
  let a = Array.from(String(code),Number);
    if (a[0] === 1 || a[0] === 2 || a[0] === 3){
      return true
    }
    return false
}

function validateCode (code) {
  var codeSplit = code.toString().split("");

  if(codeSplit[0] == "1" || codeSplit[0] == "2" || codeSplit[0] == "3"){
    return true;
  }else{
    return false;
  }
}