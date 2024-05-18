function validateForm(event) {
    event.preventDefault();
    let valid = true;

    // Clear previous error messages
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('dobError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('genderError').textContent = '';

    // Validate name
    var fullName = document.getElementById('fullName').value;
    if (fullName === '') {
        document.getElementById('fullNameError').textContent = 'Full Name is required.';
        valid = false;
    }

    // Validate phone
    const phoneNumber = document.getElementById('phoneNumber').value;
    if (phoneNumber === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        valid = false;
    } 

    // Validate email
    const email = document.getElementById('email').value;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } 

    // Validate password
    const password = document.getElementById('password').value;
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        valid = false;
    }

    // Validate dob
    const dob = document.getElementById('dob').value;
    if (dob === '') {
        document.getElementById('dobError').textContent = 'Date of Birth is required.';
        valid = false;
    }

    // Validate address
    const address = document.getElementById('address').value;
    if (address === '') {
        document.getElementById('addressError').textContent = 'Address is required.';
        valid = false;
    }

    // Validate gender
    var gender = document.getElementsByName('gender');
    var genderSelected = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderSelected = true;
            break;
        }
    }
    if (!genderSelected) {
        document.getElementById('genderError').textContent = 'Select a gender.';
        valid = false;
    }

    if (valid) {
        populateReport();
    }

    return valid;
}

function populateReport() {
    var fullName = document.getElementById('fullName').value;
    var phoneCode = document.getElementById('countryCode').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var gender ;
    const genderElements = document.getElementsByName('gender');
    for (let i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
            break;
        }
    }

    var report = 
    "Full Name: " + fullName + "\n" +
    "Phone Number: " + phoneCode + " " + phoneNumber + "\n" +
    "Email: " + email + "\n" +
    "Password: " + password + "\n" +
    "Date of Birth: " + dob + "\n" +
    "Address: " + address + "\n" +
    "Gender: " + gender + "\n";
  
  document.getElementById('texttrport').value = report;
}