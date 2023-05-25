function playAudio(){
    document.getElementById("audio").play();
  }
  
  function playAudioG(){
    document.getElementById("audiog").play();
  }
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
event.preventDefault();
var fullName = document.getElementById('fullName').value;
var email = document.getElementById('email').value;
var fail = false;
var adr_pattern = /[0-9a-z_]+@[a-z]+\.[a-z]{2,5}/i;
if(fullName=="" || fullName ==" "){
      fail = "Your name please";
  }
  else if(email==""){
      fail = "Your email ";
  }
  else if(adr_pattern.test(email)==false){
      fail = "Your email is not correct example:alibek.musabek@gmail.com";
  }
  if(fail){
      playAudio();
      alert(fail);
      return;
  }
  else {
      if (confirm('Thank you for your application.Do you want to play a game to get discount?')) {
        playAudioG();
  setTimeout(function() {
    window.open('forms.html', '_blank');
  }, 2000);
}
  }
person = {
  fullname: fullName,
  Email: email
};
console.log("Your fullname is " + person.fullname);
console.log("Your email is " + person.Email);
form.reset();
});