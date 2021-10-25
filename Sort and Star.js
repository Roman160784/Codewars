function twoSort(s) {

  return s.sort()[0].split('').join('***');
}

function twoSort(s) {
  var last = s.sort()[0];
  var a = last[0];
  for(var i = 1; i < last.length; i++) {
    a += "***" + last[i];
  }
  return a;
}

function twoSort(s) {
  var word = s.sort()[0];
  var result = "";
  for (var i=0; i<word.length; i++) {
    result += word[i];
    if (i != word.length - 1) {
      result += "***";
    }
  }
  return result;