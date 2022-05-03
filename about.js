alert("Form Submitted");



function showAlert() {
    count = FormSubmitted;
    alert(count);
    counterText.textContent = count;
    console.log(counterText)
}
  


let form = document.querySelector('form#contact');
let catPic = document.querySelector('https://p1-tt.byteimg.com/origin/tos-cn-i-qvj2lq49k0/cac66f77ebb14cf38c2d9afbd95003cf.jpg');

form.addEventListener('submit',showAlert);

pic.addEventListener('mouseover')








//step 1 grab the html element
const image = document.querySelector("img");



// step 2 write callback function:

function handleMouseOver() {
	alert("Hey, you are beautiful")
}


//step 3 combing using addEventListener
form.addEventListener('submit', handlesubmit) 
image.addEventListener("mouseover", handleMouseOver)