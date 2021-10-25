function isDigit(s) {
console.log(s)
var s = s.trim().split(".")
console.log(s)
if(s.length>2 || s[0].length === 0){
return false}

for(var i = 0; i < s[0].length; i++){
if(typeof(Number(s[0][i]))&& Number(s[0][i])===Number(s[0][i])&& (s[0][i]!==" ")) {

}else if (s[0][i] === "-" && i ===0){

}else{

return false;
}
}
if(s[1]){
for(var i = 0; i < s[1].length; i++){
if(typeof(Number(s[1][i]))&& Number(s[1][i])===Number(s[1][i])) {

}else{
return false}
}
}
return true;
}