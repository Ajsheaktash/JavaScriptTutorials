function val(){
    
        var x=document.getElementById("in1").value;
        var y=document.getElementById("pid");
        y.innerHTML="";
        y.style.color="red";
        try {
            if(x==" ") throw "It shoould not be blank";
            if(x<5) throw "It should not be less than 5";
            if(x>10) throw "It should not be greater than 10";
            if(isNaN(x)) throw "A number should be entered ";
            if(x>=5 && x<=10){
                y.innerHTML=" Congrats";
                y.style.color="green";
            }



    } catch (e) {
        y.innerHTML=e;
    }
}