document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    // Event listener for form submission
    form.addEventListener("submit", function (event) {
        let isValid = true; // Flag to track validation status

        // Get form input elements
        const fname = document.getElementById("fname");
        const lname = document.getElementById("lname");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const feedback = document.getElementById("feedback");

        // Function to display error messages
        function showError(input, message) {
            const errorDisplay = input.nextElementSibling; // Get the small tag for error message
            errorDisplay.textContent = message; // Set error message
            errorDisplay.style.color = "red"; // Set error text color
            isValid = false; // Mark form as invalid
        }

        // Function to clear error messages
        function clearError(input) {
            const errorDisplay = input.nextElementSibling; // Get the small tag for error message
            errorDisplay.textContent = ""; // Clear error message
        }

        // ==========================
        // VALIDATION CHECKS START
        // ==========================

        // Check First Name
        if (fname.value.trim() === "") {
            showError(fname, "First name is required.");
        } else {
            clearError(fname);
        }

        // Check Last Name
        if (lname.value.trim() === "") {
            showError(lname, "Last name is required.");
        } else {
            clearError(lname);
        }

        // Validate Email using regex pattern
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Basic email format check
        if (!email.value.match(emailPattern)) {
            showError(email, "Enter a valid email address.");
        } else {
            clearError(email);
        }

        // Validate Phone Number (Only numbers, exactly 10 digits)
        const phonePattern = /^[0-9]{10}$/;
        if (!phone.value.match(phonePattern)) {
            showError(phone, "Enter a valid 10-digit phone number.");
        } else {
            clearError(phone);
        }

        // Validate Feedback Message (At least 10 characters required)
        if (feedback.value.trim().length < 10) {
            showError(feedback, "Message must be at least 10 characters long.");
        } else {
            clearError(feedback);
        }

        // ==========================
        // VALIDATION CHECKS END
        // ==========================

        // Prevent form submission if validation fails
        if (!isValid) {
            event.preventDefault();
        }
    });
});
