
//   const form = document.querySelector('form');
//   const emailInput = document.getElementById('exampleInputEmail1');
//   const passwordInput = document.getElementById('exampleInputPassword1');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Validate email input
//     const emailValue = emailInput.value.trim();
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(emailValue)) {
//       emailInput.classList.add('is-invalid');
//       emailInput.nextElementSibling.innerHTML = 'Please enter a valid email address';
//       return;
//     }
//     emailInput.classList.remove('is-invalid');
//     emailInput.nextElementSibling.innerHTML = '';

//     // Validate password input
//     const passwordValue = passwordInput.value.trim();
//     if (passwordValue === '') {
//       passwordInput.classList.add('is-invalid');
//       passwordInput.nextElementSibling.innerHTML = 'Please enter a password';
//       return;
//     }
//     passwordInput.classList.remove('is-invalid');
//     passwordInput.nextElementSibling.innerHTML = '';

//     // All inputs are valid, submit the form
//     form.submit();
//   });
const form = document.querySelector('form');
const emailInput = document.getElementById('exampleInputEmail1');
const passwordInput = document.getElementById('exampleInputPassword1');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Validate email input
  const emailValue = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailValue)) {
    emailInput.classList.add('is-invalid');
    emailInput.nextElementSibling.innerHTML = 'Please enter a valid email address';
    return;
  }
  emailInput.classList.remove('is-invalid');
  emailInput.nextElementSibling.innerHTML = '';

  // Validate password input
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    passwordInput.classList.add('is-invalid');
    passwordInput.nextElementSibling.innerHTML = 'Please enter a password';
    return;
  }
  passwordInput.classList.remove('is-invalid');
  passwordInput.nextElementSibling.innerHTML = '';

  // All inputs are valid, submit the form and redirect to userpage.html
  window.location.href = "userpage.html";
});
