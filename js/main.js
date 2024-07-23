/********* NAVBAR JS START *********/

const navbar = document.querySelector("#nav-links");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click",()=>{
	hamburger.classList.toggle("fa-times");
	navbar.classList.toggle("active");
});




/********* NAVBAR JS START *********/