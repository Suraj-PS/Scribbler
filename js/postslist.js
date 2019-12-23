// Delete Post Modal
function displayDeletePostModal(trashIcon) {
    var postContainer = document.getElementsByClassName("postContainer")[trashIcon.getAttribute("data-id")];
    var modal = document.getElementById("deletePostModal");
    var yesBtn = modal.getElementsByClassName("modalButton")[0];
    var noBtn = modal.getElementsByClassName("modalButton")[1];
    // Display the Delete Post Modal
    modal.style.display = "block";
    // On Yes Btn click, the post will be deleted and modal will disappear
    yesBtn.onclick = function() {
        postContainer.style.display = "none";
        modal.style.display = "none";
    }
    // On No Btn click, modal will disappear
    noBtn.onclick = function() {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {

        if (event.target == modal) {
            modal.style.display = "none";
        }

    }

}

function openPostPage(moreActionsIcon) {
    var postContainer = document.getElementsByClassName("postContainer")[moreActionsIcon.getAttribute("data-id")];
    sessionStorage.setItem("Post Title", postContainer.getElementsByClassName("postTitle")[0].innerText);
    sessionStorage.setItem("Post Author", postContainer.getElementsByClassName("postAuthor")[0].innerText);
    sessionStorage.setItem("Post Content", postContainer.getElementsByClassName("postContent")[0].innerText);
    window.location.href = "../html/post.html";
}