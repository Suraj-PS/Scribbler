// Function to populate the Post Details in the Post Container
function populatePostContainer() {
    document.getElementsByClassName("postTitle")[0].innerText = sessionStorage.getItem("Post Title");
    document.getElementsByClassName("postAuthor")[0].innerText = sessionStorage.getItem("Post Author");
    document.getElementsByClassName("postContent")[0].innerText = sessionStorage.getItem("Post Content");
}

function editPost(editBtn) {
    var editBtn = document.getElementsByClassName("editAndSavePostBtn")[0];
    var postTitleEle = document.getElementsByClassName("postTitle")[0];
    var postContentEle = document.getElementsByClassName("postContent")[0];
    // Change the Edit Button to Save Button
    editBtn.innerHTML = "Save <span class='fa fa-floppy-o'></span>";
    // Make the Post Title and Post Content Elements Editable
    postTitleEle.setAttribute("contenteditable", "true");
    postContentEle.setAttribute("contenteditable", "true");
    // Change the Post Title border color to Red
    postTitleEle.style["border-style"] = "solid";
    postTitleEle.style["border-width"] = "1px";
    postTitleEle.style["border-color"] = "pink";
    // Change the Post Content border color to Red
    postContentEle.style["border-style"] = "solid";
    postContentEle.style["border-width"] = "1px";
    postContentEle.style["border-color"] = "pink";

    editBtn.onclick = function() {
        // Change the Save Button back to Edit Btn
        editBtn.innerHTML = "Edit <span class='fa fa-pencil-square-o'></span>";
        // Make the Post Title and Post Content Elements Non-Editable
        postTitleEle.setAttribute("contenteditable", "false");
        postContentEle.setAttribute("contenteditable", "false");
        // Change the Post Title border color to none
        postTitleEle.style["border-style"] = "none";
        // Change the Post Content border color to Red
        postContentEle.style["border-style"] = "none";
    }
    
}