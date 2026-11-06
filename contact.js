// Get the form elements
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

// Listen for form submission
contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get the user's information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // The phone number is optional; the other required fields are checked here too.
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in your name, email address, and message.";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Validate the phone number only when one is provided.
    const phonePattern = /^\+?[\d\s()-]+$/;

    const phoneDigits = phone.replace(/\D/g, "");
    if (phone !== "" && (!phonePattern.test(phone) || phoneDigits.length < 7 || phoneDigits.length > 15)) {
        formMessage.textContent = "Please enter a valid phone number.";
        return;
    }

    // Display success message
    formMessage.textContent = "Your message has been submitted successfully!";

    contactForm.reset();
});
