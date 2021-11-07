String.prototype.isUpperCase = function(c) {
  return this.toString() == this.toUpperCase() 
}

String.prototype.isUpperCase = function(){
  if(this.toString() == this.toUpperCase()){
    return true;
  } else{
    return false;
  }
}