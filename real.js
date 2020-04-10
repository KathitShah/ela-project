var okAudio = document.getElementById("yourAudio");
var benchAudio = document.getElementById("myAudio");
var whiteAudio = document.getElementById("whiteAudio");
function playSoundOk(){
  setTimeout(function(){ document.getElementById("w").style.display = "inline" }, 10000);
  setTimeout(function(){ document.getElementById("p").style.display = "inline" }, 12500);
  setTimeout(function(){ document.getElementById("white").style.display = "inline" }, 14500);
  setTimeout(function(){ document.getElementById("power").style.display = "inline" }, 16000);
  setTimeout(function(){ document.getElementById("w").style.display = "none" }, 31000);
  setTimeout(function(){ document.getElementById("p").style.display = "none" }, 31000);
  setTimeout(function(){ document.getElementById("white").style.display = "none" }, 31000);
  setTimeout(function(){ document.getElementById("power").style.display = "none" }, 31000);
  okAudio.play();
}
function playSoundBench(){
  setTimeout(function(){ document.getElementById("whitebench").style.display = "inline" }, 5000);
  setTimeout(function(){ document.getElementById("whitebench").style.display = "none" }, 28000);
  benchAudio.play();
}
function playSoundWhite(){
  setTimeout(function(){ document.getElementById("slave-right").style.display = "inline" }, 4000);
  setTimeout(function(){ document.getElementById("slave-left").style.display = "inline" }, 4000);
  setTimeout(function(){ document.getElementById("slave-right").style.display = "none" }, 46000);
  setTimeout(function(){ document.getElementById("slave-left").style.display = "none" }, 46000);
  setTimeout(function(){ document.getElementById("handcuff").style.display = "inline" }, 46000);
  setTimeout(function(){ document.getElementById("handcuff").style.display = "none" }, 47500);
  whiteAudio.play();

}
