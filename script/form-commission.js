function validateForm(event) {
    event.preventDefault();

    const fullNameError = document.getElementById('fullNameError');
    const emailError = document.getElementById('emailError');
    const contactNumberError = document.getElementById('contactNumberError');
    const artworkError = document.getElementById('artworkError');
    const finishDateError = document.getElementById('finishDateError');
    fullNameError.textContent = '';
    emailError.textContent = '';
    contactNumberError.textContent = '';
    artworkError.textContent = '';
    finishDateError.textContent = '';
  
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact-number').value;
    const artwork = document.getElementById('artwork').value;
    const finishDate = document.getElementById('finish-date').value;
  
    if (fullName.trim() === '') {
      fullNameError.textContent = 'Please enter your full name.';
    }
  

    if (email.trim() === '') {
      emailError.textContent = 'Please enter your email.';
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
    }
  

    if (contactNumber.trim() === '') {
      contactNumberError.textContent = 'Please enter your contact number.';
    }
  

    if (artwork === '') {
      artworkError.textContent = 'Please select the artwork type.';
    }
  

    if (finishDate === '') {
      finishDateError.textContent = 'Please select the finish date.';
    }
  }
  

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const form = document.getElementById('myForm');
  form.addEventListener('submit', validateForm);