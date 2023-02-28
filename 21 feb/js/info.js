var t=Math.floor((Math.random()*100)+1);

var count=0;
function Control(){
var i=document.getElementById("in1").value;
if(t>i){
count++;
document.getElementById("ss").innerHTML=count;
document.getElementById("pp").innerHTML="Another guess, maybe greater ";
}else if(t<i){
count++;
document.getElementById("ss").innerHTML=count;
document.getElementById("pp").innerHTML="Another guess, maybe less";
}else if(i==t){
count++;
document.getElementById("ss").innerHTML=count;
document.getElementById("rr").innerHTML=t;
document.getElementById("pp").innerHTML="Congrats";
}

}