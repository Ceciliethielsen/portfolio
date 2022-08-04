//Cecilie JS start
  
  //variablerne er defineret herunder - hentet fra DOM
  let burgerMenu = document.getElementById('burgermenu');
  let overlay = document.getElementById('menu');

  //clickfunktion på burgermenuen er aktiveret via et event og en funktion starter
  burgerMenu.addEventListener('click',function(){
    //toggle er en skifte-funktion, som bruges til at skjule og vise de valgte elementer - her både "close" og "overlay"
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
  });
//Cecilie JS slut