// code for timer
var countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo1").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo3").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo4").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo5").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo6").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo7").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo8").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo9").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo10").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
   document.getElementById("demo11").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    document.getElementById("demo1").innerHTML = "EXPIRED";
    document.getElementById("demo2").innerHTML = "EXPIRED";
    document.getElementById("demo3").innerHTML = "EXPIRED";
    document.getElementById("demo4").innerHTML = "EXPIRED";
    document.getElementById("demo5").innerHTML = "EXPIRED";
    document.getElementById("demo6").innerHTML = "EXPIRED";
    document.getElementById("demo7").innerHTML = "EXPIRED";
    document.getElementById("demo8").innerHTML = "EXPIRED";
    document.getElementById("demo9").innerHTML = "EXPIRED";
    document.getElementById("demo10").innerHTML = "EXPIRED";
    document.getElementById("demo11").innerHTML = "EXPIRED";
  }
}, 1000);




