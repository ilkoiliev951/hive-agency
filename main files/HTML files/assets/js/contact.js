$(document).ready(function () {
    $('#contact_send_btn').on('click', function () {
        var email = 'info@quantumbyte.app';
        var subject = 'Business Inquiry';
        var message = $('#email_body').val();

        var mailtoLink = 'mailto:' + email + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(message);

        // Open the default email client
        window.location.href = mailtoLink;
    });
});
