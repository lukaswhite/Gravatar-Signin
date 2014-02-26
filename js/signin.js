$(document).ready(function(){

    // React to the email field (on the login form) having been filled out
    $('form#login input[name="email"]').blur(function(){
        var email = $(this).val();

        // Assuming an email has been provided...
        if (email !== '') {     

            // Construct the Gravatar URL
            var gravatar_url = 'http://www.gravatar.com/avatar/' + md5(email.trim().toLowerCase()) + '?s=64';

            // Set the source of the avatar image.
            $('img#avatar').attr('src', gravatar_url);
        }
        
    });

});