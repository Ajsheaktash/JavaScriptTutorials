function kontrol(){
   // alert("no allowed to paste in this field");
    document.getElementById("hh").innerHTML="no allowed to paste in this field";
    document.getElementById("hh").style.color="red";
}
function mouseover(){
    document.getElementById("pp").style.fontSize="100px";
    document.getElementById("pp").innerHTML="Come here";
     document.getElementById("pp").style.color="pink";
 }
 function mouseout(){
    
    document.getElementById("pp").style.fontSize="50px";
    document.getElementById("pp").style.color="blue";
 document.getElementById("pp").innerHTML="noo do not go";
}