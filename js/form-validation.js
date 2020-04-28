// Wait for the DOM to be ready
$().ready(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            username_register: "required",
            password_register: {
                required: true,
                minlength: 6
            },
            fullName_register: "required",
            email_register: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            birthdayDate_register:"required"
        },
        // Specify validation error messages
        messages: {
            username_register: "Please enter user name",
            password_register: {
                required: "Please provide a password",
                minlength: "Your password must be at least 6 characters long"
            },
            fullName_register: "Please enter your full name",
            email_register: "Please enter a valid email address",
            birthdayDate_register:"Please enter your birthday date"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function() {
            store();
        }
    });
});