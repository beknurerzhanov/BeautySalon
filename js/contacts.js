$('#myForm').submit(function(event) {
    event.preventDefault();

    var fullName = $('#fullName').val();
    var email = $('#email').val();
    var fail = false;
    
    var adr_pattern = /[0-9a-z_]+@[a-z]+\.[a-z]{2,5}/i;

    if (fullName === "" || fullName === " ") {
      fail = "Your name please";
    } else if (email === "") {
      fail = "Your email ";
    } else if (!adr_pattern.test(email)) {
      fail = "Your email is not correct example: alibek.musabek@gmail.com";
    }

    if (fail) {
      alert(fail);
      return;
    } else {
      if (confirm('Thank you for your application. Do you want to play a game to get a discount?')) {
        setTimeout(function() {
          window.open('forms.html', '_blank');
        }, 2000);
      }
    }

    var person = {
      fullname: "",
      email: "",
      Object: function (fullName, email) {
        this.fullname = fullName;
        this.email = email;
      }
    };
    var nameemail = new person.Object($('#fullName').val(),$('#email').val())
    console.log("Your fullname is " + nameemail.fullname);
    console.log("Your email is " + nameemail.email);

    $('#myForm')[0].reset();
  });

