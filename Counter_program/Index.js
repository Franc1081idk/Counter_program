const increase = 1;
const decrease = -1;
let digit = 0;
/*Increase button*/
document.getElementById("increase").onclick = function () {
  digit += 1;
  document.getElementById("digit").textContent = `${digit}`;

  if (digit == 100) {
    document.getElementById("100").textContent =
      "Wow, you clicked 100 times you are really dedicated!!!";
  }
};
/*Decrease button*/
document.getElementById("decrease").onclick = function () {
  digit -= 1;
  document.getElementById("digit").textContent = `${digit}`;
};
/*Reset button*/
document.getElementById("reset").onclick = function () {
  digit = 0;
  document.getElementById("digit").textContent = `${digit}`;
};
