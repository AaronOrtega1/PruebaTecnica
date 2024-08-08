function changeColor() {
  // Get the button and body of html
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    // Toggle class in body to light-theme on click
    body.classList.toggle("light-theme");
  });
}

//
document.addEventListener("DOMContentLoaded", changeColor);

// document.addEventListener("DOMContentLoaded", function () {
//   // Get the modal
//   var modal = document.getElementById("welcome-modal");

//   // Get the <span> element that closes the modal
//   var closeButton = document.querySelector(".close-button");

//   // Open the modal
//   modal.style.display = "block";

//   // When the user clicks on <span> (x), close the modal
//   closeButton.onclick = function () {
//     modal.style.display = "none";
//   };

//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };
// });
