function loginControl(){
    var e=document.getElementById("mail").value;
    var s=document.getElementById("sifre").value;
if(e=="info@gmail.com" && s=="123456"){
    document.getElementById("demo").innerHTML="Giris basarili";

}else{
   // document.getElementById("demo").innerHTML="Sorry";
   alert("bilgilerinizi kontrol ediniz");
}


}