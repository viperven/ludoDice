let randomNumber1 = Math.ceil(Math.random() * 6);
    let randomNumber2 = Math.ceil(Math.random() * 6);

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
   
    if(randomNumber1>randomNumber2)
    {
      document.querySelector("h1").innerHTML="PLAYER 1 WINS ";
    }
    else if(randomNumber2>randomNumber1)
    {
      document.querySelector("h1").innerHTML="PLAYER 2 WINS ";
    }
    else
    {
      document.querySelector("h1").innerHTML="DRAW PLAY AGAIN";
    }