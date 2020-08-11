const validateEmail = () => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const emailField = $( "#email" );
    const emailText = emailField.val();
    const emailLabel = $( "#email-label")
    if (emailText.match(pattern) === null){
        emailField.addClass('error');
        emailLabel.css("display", "block");
        return false;
    }else{
        return true;
    }
}

export default function initValidator() {
    email.value = localStorage.getItem('email');
    email.oninput = () => {
        localStorage.setItem('email', email.value)
    };

    $( "#submit" ).click(function() {
        const form = $( "#feedback" );
        const message = $( ".message-success" );
        if (validateEmail()) {
            form.css("display", "none");
            message.css("display", "block"); 
        }
    });
}
