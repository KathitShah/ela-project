function hi(){
  var password = ["kathitisthebest"];
  var myName = document.getElementById("demo").value;
  var letter = myName.slice(0,1);
  var myPassword = document.getElementById("password").value;
  var capitalize = letter.toUpperCase();
  var letters = myName.slice(1,myName.length);
  var noCapital = letters.toLowerCase();
  var yourName = capitalize + noCapital;
  if(password.includes(myPassword)){
    if(yourName === "Catherine" && password.includes(myPassword)|| yourName === "Draper" && password.includes(myPassword)){
      alert("Welcome Mrs.Draper, you are being redirected to my real website!!!");
      var change = document.getElementById("big-btn").href="real.html";
    }
    else{
      alert("Welcome " + yourName + ", you are being redirected to my real website!!!");
      var change = document.getElementById("big-btn").href="real.html";
    }
  }
  else{
    alert("Please stop here and retry");
  }
}
