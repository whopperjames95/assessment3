console.log("hello world");



function showAlert() {
    count = 0;
    alert(count);
    counterText.textContent = count;
    console.log(counterText)
}
  


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);
