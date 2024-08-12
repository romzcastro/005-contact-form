const form = document.getElementById("form");
const firstName = document.getElementById("first-name");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "The Field is required");
    var input = document.getElementById("first-name");
  } else {
    setSuccessFor(firstName);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;

  formControl.className = "form-control error";
}
