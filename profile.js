















//step 1 grab html Elements
const profileBtns = document.querySelectorAll(".profile-buttons") 


//step 2 write functions
function color() {
    alert("my favorite color is blue")
}

function place() {
    alert("my favorite place is home")
}

function ritual() {
    alert("going to the gym")
}

for(let i = 0; i < profileBtns.length; i++) {
    if(profileBtns[i].id === "color") {
        profileBtns[i].addEventListener("click", color);
    } else if(profileBtns[i].id === "place") {
        profileBtns[i].addEventListener("click", place);
    } else if (profileBtns[i].id === "ritual") {
        profileBtns[i].addEventListener("click", ritual);
    }
}


//for-each with a switch statement
// profileBtns.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         let favorite = "";
//         switch(event.target.id) {
//             case "color":
//                 favorite = "blue";
//                 break;
//              case "place":
//                  favorite = "my home";
//                  break;
//              case "ritual":
//                  favorite = "going to the gym";
//                  break;       
//         }

//         alert (`My favorite ${event.target.id} is ${favorite}`);
//     })
// }) 





// //step 3: combine using addEventListener
// colorBtn.addEventListener("click", color);
// placeBtn.addEventListener("click", place);
// ritualBtn.addEventListener("click", ritual);