$(document).ready(function() {

    // signup variables
    var $signupUsername = $("#signup-username");
    var $signupPassword = $("#signup-password");
    var $signupConfirmPassword = $("#signup-confirm-password");
    var $signupBtn = $("#submit-signup");
    
    // login variables
    var $loginUsername = $("#login-username");
    var $loginPassword = $("#login-password");
    var $loginBtn = $("#submit-login");
    
    // signup function
    const signup = (event) => {
        event.preventDefault();
        console.log(`signup has been clicked`)
        console.log($signupUsername.val())
        console.log($signupPassword.val())
        console.log($signupConfirmPassword.val());
    }
    // login function
    const login = (event) => {
        event.preventDefault();
        console.log(`login has been clicked`)
        console.log($loginUsername.val())
        console.log($loginPassword.val())
    }
    
    // signup event listener
    $signupBtn.on("click", signup);
    
    // login event listener
    $loginBtn.on("click", login);
})
