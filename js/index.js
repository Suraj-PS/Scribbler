function openBlogListPage() {
    window.location.href = "./html/bloglist.html";
}

function displayCreatePostModal() {
    var modal = document.getElementById("createPostModal");
    var span = document.getElementsByClassName("close")[2];

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