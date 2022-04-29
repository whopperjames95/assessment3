//grab html element
const colorBtn = document.getElementById("color");
const placeBtn = document.getElementById("place");
const ritualBtn = document.getElementById("ritual");







//write out function
let count = 0

function myFaveColor() {
    count++;
    console.log(count);
    counterText.textContent = count;
}








//combine everything together using addEventListener
colorBtn.addEventListener("click", myFaveColor);
placeBtn.addEventListener("click", myFavePlace);
ritualBtn.addEventListener("click", myFaveRitual);