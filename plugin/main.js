const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');

// error message
const errorFname = document.getElementById('error-fname');
const errorLname = document.getElementById('error-lname');
const errorEmail = document.getElementById('error-email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();

  if (firstNameValue === '') {
    setErrorForFname(firstName, 'The Field is required');
    var input = document.getElementById('first-name');
    errorFname.style.display = 'block';
  } else {
    setSuccessFor(firstName);
    errorFname.style.display = 'none';
  }

  if (lastNameValue === '') {
    setErrorForLName(lastName, 'The Field is required');
    var input = document.getElementById('last-name');
    errorLname.style.display = 'block';
  } else {
    setSuccessFor(lastName);
    errorLname.style.display = 'none';
  }

  if (emailValue === '') {
    setErrorForEmail(email, 'Please enter a valid email address');
    email.placeholder = 'example@mail/com';
    errorEmail.style.display = 'block';
  } else if (!isEmail(emailValue)) {
    setErrorForEmail(email, 'Please enter a valid email address');
    errorEmail.style.display = 'block';
  } else {
    setSuccessFor(email);
    errorEmail.style.display = 'none';
  }
}

function setErrorForFname(input, message) {
  const formControl = input.parentElement;
  const error = formControl.querySelector('#errorFname');
  errorFname.innerText = message;
  formControl.className = 'md:flex-1 pb-3 form-control error';
}

function setErrorForLName(input, message) {
  const formControl = input.parentElement;
  const errorLname = formControl.querySelector('#error-lname');
  errorLname.innerText = message;
  formControl.className = 'md:flex-1 pb-3 form-control error';
}

function setErrorForEmail(input, message) {
  const formControl = input.parentElement;
  const errorEmail = formControl.querySelector('#error-email');
  errorEmail.innerText = message;
  formControl.className = 'md:flex-1 pb-3 form-control error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'md:flex-1 pb-3 form-control success';
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
