function test(){
    try {
    var x=parseInt(document.getElementById("in1").value);
    var a=parseInt(document.getElementById("in2").value);
    var y=x/a;
    document.getElementById("hid").innerHTML=y;
    
}
     catch (b) {
        document.getElementById("hid").innerHTML=b;   
    }
}
   