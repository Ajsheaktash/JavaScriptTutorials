function Sum(x,y,z){
    document.getElementById("hid").innerHTML=x+y+z;
}
function Sum2(...args){
    var sum=0
    for(var i of args){
        sum+=i;//sum=sum+i;
    }
    document.getElementById("h1id").innerHTML=sum;
}