/***************dark mode ********************/
function myFunction() {
    var element = document.body;
    element.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        icon.src="images/moon-icone.png";
    }else{
        icon.src="images/sun-icone2.png";
    }
 }
/*************** fin dark mode ********************/

/*************** Top BUTTON ********************/
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*************** fin Top BUTTON ********************/

/*************** CONTACT FORM ********************/

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "nassereddinewalid2001@gmail.com",
    Password : "******************",
    To : 'nassereddineabdenbi@gmail.com',
    From : document.getElementById("email").value,
    Subject : "Contact form",
    Body : "Name: " + document.getElementById("Name").value
      + "<br> Email: " + document.getElementById("email")
      + "<br> message: " + document.getElementById("Message")
}).then(
  message => alert("Message sent succesfully")
);
}

/***************fin  CONTACT FORM ********************/







