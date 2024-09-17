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

        errorMsgElement.text('');

        if (email === '' || !isValidEmail(email)) {
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
            $.ajax({
                type: 'POST',
                url: './index.php',
                data: form.serialize(),
                dataType: 'json',
                success: function (response) {
                    if (response.success) {
                        showSuccess(response.message);
                        form[0].reset();
                    } else {
                        showError(response.message);
                    }
                },
                error: function () {
                    showError('An error occurred. Please try again later.');
                }
            });
        }
    });

    function showError(message) {
        errorMsgElement.text(message).css('color', 'red');
        errorMsgElement.text(message).css('background', '#131313');
    }

    function showSuccess(message) {
        errorMsgElement.text(message).css('color', 'green');
    }

    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

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