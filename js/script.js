function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function () {
    var errorMsgElement = $('#error-msg');
    var form = $('#contact-form');

    form.submit(function (e) {
        e.preventDefault();

        var email = $('#email-input').val().trim();
        var name = $('#name-input').val().trim();
        var message = $('#message').val().trim();
        var isValid = true;

        errorMsgElement.text(''); // Clear previous error messages

        if (email === '') {
            showError('Email should be filled');
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError('Email should be a valid email address');
            isValid = false;
        } else if (name === '') {
            showError('Name should be filled');
            isValid = false;
        } else if (/\d/.test(name)) {
            showError('Name must not contain numbers');
            isValid = false;
        } else if (message === '') {
            showError('Message should be filled');
            isValid = false;
        }

        if (isValid) {
            // Submit the form via AJAX
            $.ajax({
                type: 'POST',
                url: './index.php',
                data: form.serialize(),
                dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
                success: function (response) {
                    if (response.success) {
                        showSuccess(response.message);
                        form[0].reset(); // Clear the form
                    } else {
                        showError(response.message);
                    }
                },
                error: function (xhr, status, error) {
                    console.error("AJAX Error:", status, error);
                    console.log("Response Text:", xhr.responseText);
                    showError('An error occurred. Please try again later.');
                }
            });
        }
    });

    function showError(message) {
        errorMsgElement.text(message).css('color', 'red');
    }

    function showSuccess(message) {
        errorMsgElement.text(message).css('color', 'green');
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Clear error message when user starts typing
    form.find('input, textarea').on('input', function () {
        errorMsgElement.text('');
    });
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