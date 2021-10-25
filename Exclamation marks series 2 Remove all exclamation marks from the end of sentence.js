function remove(s){
  //coding and coding....
  return s.replace(/!*$/g,'')
}

function remove(s)
{
    while(s && s.slice(-1) == "!") 
    { 
        s = s.slice(0,-1) 
    }
    return s;
}

function remove(s){
 let res = s;
  for(let i = s.length-1; i >= 0; i-- ){
    if(s[i] == "!"){res = res.slice(0, -1)}
    else{break;}
  }
  return res;  
}