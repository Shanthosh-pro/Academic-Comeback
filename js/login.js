// This is where you, the admin, will add new codes.
// For a real-world scenario with more users, this list would be longer.
const validCodes = ['123456', '987654', '112233', '555888'];

// Get the form elements
const loginForm = document.getElementById('loginForm');
const accessCodeInput = document.getElementById('accessCode');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
    // Prevent the form from actually submitting and reloading the page
    event.preventDefault();

    const enteredCode = accessCodeInput.value;

    // Check if the entered code is in our list of valid codes
    if (validCodes.includes(enteredCode)) {
        // If the code is valid, redirect the user to the main dashboard
        window.location.href = 'dashboard.html';
    } else {
        // If the code is invalid, show an error message
        errorMessage.textContent = 'Invalid Code. Please try again.';
        accessCodeInput.style.borderColor = 'red'; // Give visual feedback
    }
});
