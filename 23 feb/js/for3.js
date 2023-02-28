document.write("<table border='50'><tr>");
for(var i=1;i<=10;i++){
    document.write("<td>");
    for(var a=1;a<=10;a++){
        document.write(i+"*"+a+"="+i*a+"</br>");
    }
    document.write("</td>");
}
document.write("</tr> </table>");