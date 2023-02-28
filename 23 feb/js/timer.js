function showTime() {
    var date = new Date();
    var h = date.getHours();//0-23
    var m = date.getMinutes();//0-59
    var s = date.getSeconds();//0-59
    var state="AM";

    if(h>=12){
      state="PM";
    }
    var time= h + ":" + m + ":" + s +" " +state;
    document.getElementById('demo').innerHTML = time;
   setTimeout(showTime, 1000);
  }
  showTime();
 