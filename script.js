"use strict";

let buttonOn = document.querySelector(".button"),
ball = document.querySelector(".ball"),
text = document.querySelector(".ball__text");

buttonOn.addEventListener("click", function(){
   let randomNumber = Math.floor(Math.random() * 7);
   switch(randomNumber){
      case 0 : text.innerHTML= "Всё  определённо будет хорошо";
      break;
      case 1 : text.innerHTML= "У тебя всё получится!";
      break;
      case 2 : text.innerHTML= "Принятые решения были верными";
      break;
      case 3 : text.innerHTML= "Стоит хорошенько обдумать свои последние действия";
      break;
      case 4 : text.innerHTML= " Будущее видится счастливым и ярким";
      break;
      case 5 : text.innerHTML= " Впереди тебя ожидает насыщенная неделя";
      break;
      case 6 : text.innerHTML= " Твоя зебра абсолютно белая";
      break;
   }
   buttonOn.classList.add("on");
   setTimeout(function(){
      ball.classList.add("change");
   },500);
});


