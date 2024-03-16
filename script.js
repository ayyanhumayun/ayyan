$(document).ready(function() {
    // Function to highlight invalid fields
    function highlightInvalidField(field) {
        $(field).addClass("invalid");
    }

    // Function to clear field highlighting
    function clearFieldHighlight(field) {
        $(field).removeClass("invalid");
    }

    // Validate fields on form submission
    $("#sign-up-form").submit(function(event) {
        // Validate each field
        var valid = true;

        // Name validation
        if ($("#name").val().trim() === "") {
            highlightInvalidField("#name");
            valid = false;
        } else {
            clearFieldHighlight("#name");
        }

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test($("#email").val())) {
            highlightInvalidField("#email");
            valid = false;
        } else {
            clearFieldHighlight("#email");
        }
        // Prevent form submission if invalid
        if (!valid) {
            event.preventDefault();
        }
    });
});
