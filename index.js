function hi(){
  var name = ["Catherine", "Kathit", "Draper", "Maxwell", "Shamel", "Lee", "Kato", "Steven", "Asher", "John Paul", "Jaypee", "John"];
  var password = ["catherinedraper@102"];
  var myName = document.getElementById("demo").value;
  var letter = myName.slice(0,1);
  var myPassword = document.getElementById("password").value;
  var myPasswordLetters = myPassword.slice(0,myPassword.length);
  var myPasswordLowerCase = myPasswordLetters.toLowerCase();
  var capitalize = letter.toUpperCase();
  var letters = myName.slice(1,myName.length);
  var noCapital = letters.toLowerCase();
  var yourName = capitalize + noCapital;
  if(name.includes(yourName) && password.includes(myPasswordLetters)){
    if(yourName === "Catherine" && password.includes(myPasswordLetters)|| yourName === "Draper" && password.includes(myPasswordLetters)){
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
