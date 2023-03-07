function Sum5(){
    var x=Number(document.getElementById("in1").value);
    var y=Number(document.getElementById("in2").value);
    var result=Sum(x,y);
    document.getElementById("demo").innerHTML=result;
}
function Sum(a,b){
    return a+b;
} //es6 gore cagirma
function Sum6(){
    var d=Number(document.getElementById("in1").value);
    var c=Number(document.getElementById("in2").value);
    var s=(f,g)=>{return f+g;};
    document.getElementById("demo").innerHTML=s(d,c);
    
}