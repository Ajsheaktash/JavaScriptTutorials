var x=document.getElementById("bid");
x.addEventListener("click",Run);
x.addEventListener("mouseover",Run2);
x.addEventListener("mouseout",Run3);

function Run(){
    //alert("Hi Eventlistener");
    document.getElementById("hid").innerHTML+="Click run </br>";
}
function Run2(){
   // document.getElementById("bid").style.background="green";
   document.getElementById("hid").innerHTML+=" Mouseover run </br>";
}
function Run3(){
    document.getElementById("hid").innerHTML+="Mouseout run </br>";
}