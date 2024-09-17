function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email-input');
    const nameInput = document.getElementById('name-input');
    const messageInput = document.getElementById('message');
    const errorMessageDiv = document.getElementById('error-msg');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear existing error messages
        errorMessageDiv.textContent = '';
        errorMessageDiv.style.color = 'red';
        errorMessageDiv.style.display = 'none';
        emailInput.style.borderColor = '';
        nameInput.style.borderColor = '';
        messageInput.style.borderColor = '';

        // Validate inputs one by one
        if (!validateEmail(emailInput)) {
            displayErrorMessage('Email is required and must be a valid email address.');
            emailInput.focus();
            return;
        }

        if (!validateName(nameInput)) {
            displayErrorMessage('Name is required and must not contain numbers.');
            nameInput.focus();
            return;
        }

        if (!validateMessage(messageInput)) {
            displayErrorMessage('Message is required.');
            messageInput.focus();
            return;
        }

        // If all validations pass, submit the form
        submitForm();
    });

    function validateEmail(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input.value);
    }

    function validateName(input) {
        const nameRegex = /^[a-zA-Z\s]+$/;
        return nameRegex.test(input.value);
    }

    function validateMessage(input) {
        return input.value.trim().length > 0;
    }

    function displayErrorMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.color = 'red';
        errorMessageDiv.style.display = 'block';
    }

    function displaySuccessMessage(message) {
        errorMessageDiv.textContent = message;
        errorMessageDiv.style.color = 'red';
        errorMessageDiv.style.display = 'block';
    }

    function submitForm() {
        // Here you would typically send the form data to your server
        console.log('Form submitted successfully!');

        // Display success message
        displaySuccessMessage('An error ocured try again later.');

        // You might want to reset the form here
        form.reset();
    }
});
$(window).on('scroll', function () {
    $('.animate').each(function () {
        var elementTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        // Check if the element is visible in the viewport
        if (windowBottom > elementTop + 50) {
            $(this).addClass('in-view');
        }
    });
});
$(window).on('scroll', function () {
    $('.left-animate').each(function () {
        var elementTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        // Check if the element is visible in the viewport
        if (windowBottom > elementTop + 60) {
            $(this).addClass('in-view');
        }
    });
});
$(window).on('scroll', function () {
    $('.right-animate').each(function () {
        var elementTop = $(this).offset().top;
        var windowBottom = $(window).scrollTop() + $(window).height();

        // Check if the element is visible in the viewport
        if (windowBottom > elementTop + 60) {
            $(this).addClass('in-view');
        }
    });
});