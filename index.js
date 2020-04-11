function hi(){
  var list = ["Abby", "Alyssa", "Aziz", "Camilla", "Catherine", "Draper", "Charles", "Elizabeth", "Elly", "Emili", "Ethan", "John", "Jaypee", "Jp", "Jonathan", "John paul", "Kathit", "Kato", "Naima", "Maxwell", "Max", "Lee", "Kushal", "Khyle", "Peter", "Asher", "Hiren", "Asher", "A", "Trevor", "Sydney", "Steven", "Simran", "Shamel"]
  var password = ["kathitisthebest"];
  var myName = document.getElementById("demo").value;
  var letter = myName.slice(0,1);
  var myPassword = document.getElementById("password").value;
  var capitalize = letter.toUpperCase();
  var letters = myName.slice(1,myName.length);
  var noCapital = letters.toLowerCase();
  var yourName = capitalize + noCapital;
  if(list.includes(yourName) && password.includes(myPassword)){
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
