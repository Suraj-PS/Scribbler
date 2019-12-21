// SignUp Modal
function displaySignUpModal() {
    var modal = document.getElementById("signUpModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {

        if (event.target == modal) {
            modal.style.display = "none";
        }

    }
    
}

// SignIn Modal
function displaySignInModal() {
    var modal = document.getElementById("signInModal");
    var span = document.getElementsByClassName("close")[1];

    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {

        if (event.target == modal) {
            modal.style.display = "none";
        }

    }

}

function switchToSignUpModal() {
    var signInModal = document.getElementById("signInModal");
    var signUpModal = document.getElementById("signUpModal");

    if (signInModal.style.display === "block") {
        signInModal.style.display = "none";
        displaySignUpModal();
    }
}