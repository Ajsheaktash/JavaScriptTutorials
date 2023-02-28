var q=["What is 4+5 ?", "What is the 10 percent of 100?","What stands for CRM?"];
var a=["9","10","Customer Relationship Management"];
var k=0;
document.getElementById("h5").innerHTML=q[k];
function Answer(){
    document.getElementById("pp").innerHTML=a[k];
}
function Next(){
    if(k==q.length-1){
        alert("quiz over")
    }else{
    k++;
    document.getElementById("h5").innerHTML=q[k];
    document.getElementById("pp").innerHTML="";
}
}
function Back(){
    if(k==0){
        alert("no back");
    }else{
    k--;
    document.getElementById("h5").innerHTML=q[k];
    document.getElementById("pp").innerHTML="";
}
}