  //alert("virker det?")
  //variablerne er defineret herunder - hentet fra DOM
  let burgerMenu = document.getElementById('burgermenu');
  let overlay = document.getElementById('navbar');

  //clickfunktion på burgermenuen er aktiveret via et event og en funktion starter
  burgerMenu.addEventListener('click',function(){
    //toggle er en skifte-funktion, som bruges til at skjule og vise de valgte elementer - her både "close" og "overlay"
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
  
  //Scroll til toppen-knap
  mybutton = document.getElementById("topBtn");

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
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
