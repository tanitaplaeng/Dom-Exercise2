/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('#menu-button')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//         }
//     }
//     }
// }

const lettersLink = document.getElementById("letterslink");
const numbersLink = document.getElementById("numberslink");
const myLetters = document.getElementById("letters");
const myNumbers = document.getElementById("numbers");

function theLetters() {
    myLetters.style.display = "block";
    myNumbers.style.display = "none";
}

function theNumbers() {
    myLetters.style.display = "none";
    myNumbers.style.display = "block";
}

lettersLink.addEventListener("click", theLetters);
numbersLink.addEventListener("click", theNumbers);