function validateForm(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
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
  
    // Get form field values
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contact-number').value;
    const artwork = document.getElementById('artwork').value;
    const finishDate = document.getElementById('finish-date').value;
  
    // Validate full name
    if (fullName.trim() === '') {
      fullNameError.textContent = 'Please enter your full name.';
    }
  
    // Validate email
    if (email.trim() === '') {
      emailError.textContent = 'Please enter your email.';
    } else if (!validateEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
    }
  
    // Validate contact number
    if (contactNumber.trim() === '') {
      contactNumberError.textContent = 'Please enter your contact number.';
    }
  
    // Validate artwork
    if (artwork === '') {
      artworkError.textContent = 'Please select the artwork type.';
    }
  
    // Validate finish date
    if (finishDate === '') {
      finishDateError.textContent = 'Please select the finish date.';
    }
  }
  
  // Helper function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Add form submit event listener
  const form = document.getElementById('myForm');
  form.addEventListener('submit', validateForm);