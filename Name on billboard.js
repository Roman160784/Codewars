let q = 0;
for (let i=1;i<=name.length;i++) {q+=price}
return q
} 


function billboard(name, price = 30){

var totalCost = 0;
for(i=0; i<name.length; i++){
    totalCost += price;
} 

return totalCost;

}