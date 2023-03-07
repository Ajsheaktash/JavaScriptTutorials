var x=document.getElementById("divid");
x.addEventListener("mousemove", Random);
x.addEventListener("click", CloseRandom);

function Random(){
      document.getElementById("pid").innerHTML=(Math.random())*10;
}
function CloseRandom(){
    x.removeEventListener("mousemove",Random);
   // document.getElementById("divid").removeEventListener("mousemove",Random);
}