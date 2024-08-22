const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const option1 = document.getElementById('query-option1');
const option2 = document.getElementById('query-option2');
const message = document.getElementById('message');
const consentCheck = document.getElementById('consent-check');

// error message
const errorFname = document.getElementById('error-fname');
const errorLname = document.getElementById('error-lname');
const errorEmail = document.getElementById('error-email');
const errorQuery = document.getElementById('error-query');
const errorMessage = document.getElementById('error-message');
const errorConcent = document.getElementById('error-consent');

form.addEventListener('submit', (e) => {
  checkInputs();
  e.preventDefault();
});

function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();

  if (firstNameValue === '') {
    setErrorForFname(firstName, 'This Field is required');
    var input = document.getElementById('first-name');
    errorFname.style.display = 'block';
  } else {
    setSuccessFor(firstName);
    errorFname.style.display = 'none';
  }

  if (lastNameValue === '') {
    setErrorForLName(lastName, 'This Field is required');
    var input = document.getElementById('last-name');
    errorLname.style.display = 'block';
  } else {
    setSuccessFor(lastName);
    errorLname.style.display = 'none';
  }

  if (emailValue === '') {
    setErrorForEmail(email, 'Please enter a valid email address');
    email.placeholder = 'example#mail.com';
    errorEmail.style.display = 'block';
  } else if (!isEmail(emailValue)) {
    setErrorForEmail(email, 'Please enter a valid email address');
    errorEmail.style.display = 'block';
  } else {
    setSuccessFor(email);
    errorEmail.style.display = 'none';
  }

  if (messageValue === '') {
    setErrorForMessage(message, 'This field is required');
    var input = document.getElementById('message');
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
  }

  if (!option1.checked && !option2.checked) {
    errorQuery.innerText = 'Please select a query type';
    errorQuery.style.display = 'block';
  } else {
    errorQuery.style.display = 'none';
  }

  if (!consentCheck.checked) {
    errorConcent.innerText =
      'To submit this form, please consent to being contacted';
    errorConcent.style.display = 'block';
  } else {
    errorConcent.style.display = 'none';
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

function setErrorForMessage(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('#error-message');
  errorMessage.innerText = message;
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
