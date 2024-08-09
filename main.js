function changeColor() {
  // Get the button and body of html
  const toggleButton = document.getElementById("theme-toggle");
  const body = document.body;

  // Verify if there is a theme in the local storage
  const savedTheme = localStorage.getItem("theme");

  // If there is a theme apply it
  if (savedTheme) {
    body.classList.add(savedTheme);
  }

  toggleButton.addEventListener("click", () => {
    // Toggle class in body to light-theme on click
    body.classList.toggle("light-theme");

    // Save current theme in local storage
    if (body.classList.contains("light-theme")) {
      localStorage.setItem("theme", "light-theme");
    } else {
      localStorage.removeItem("theme");
    }
  });
}

// Ensure that the changeColor function executes only after the HTML is completely loaded
document.addEventListener("DOMContentLoaded", changeColor);

document.addEventListener("DOMContentLoaded", () => {
  // Get the modal and <span> that closes it
  let modal = document.getElementById("welcome-modal");
  let closeButton = document.querySelector(".close-button");

  // Open the modal
  modal.style.display = "block";

  // When the user clicks on <span> (x), close the modal
  closeButton.onclick = () => {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

// Get element comment-form and add event listener submit
const messageForm = document.getElementById("comment-form");
messageForm.addEventListener("submit", (event) => {
  // Prevent default behavior
  event.preventDefault();

  // Get info out of the form
  const name = document.getElementById("name").value;
  console.log("🚀 ~ messageForm.addEventListener ~ name:", name);
  const email = document.getElementById("email").value;
  console.log("🚀 ~ messageForm.addEventListener ~ email:", email);
  const comment = document.getElementById("comment").value;
  console.log("🚀 ~ messageForm.addEventListener ~ comment:", comment);

  // Save it as a dictionary
  const commentInfo = {
    name: name,
    email: email,
    comment: comment,
  };
  console.log("🚀 ~ messageForm.addEventListener ~ commentInfo:", commentInfo);

  // Transform dic to JSON and save it in local storage
  localStorage.setItem("commentInfo", JSON.stringify(commentInfo));

  // Alert message to the user
  alert("Message info saved to local storage");
});
