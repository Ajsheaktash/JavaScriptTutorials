const y=[];
function Add(){
    var a=document.getElementById("yy").value;
    y.push(a,"<br>");
    document.getElementById("pp").innerHTML=y;
}
function Remove(){
    y.pop();
    document.getElementById("pp").innerHTML=y;
}