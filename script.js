let hourHand = document.getElementById("hour");
let minuteHand = document.getElementById("minute");
let secondHand = document.getElementById("second");


function setClock() {
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  let secondsDeg = (seconds / 60) * 360;
  let minutesDeg = (minutes / 60) * 360;
  let hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `translateX(-50%) rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `translateX(-50%) rotate(${hoursDeg}deg)`;
}

setInterval(setClock, 1000);
setClock();



