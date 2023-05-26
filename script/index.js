function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function validateForm() {
    var checkbox = document.getElementById("agree");
    var errorMsg = document.getElementById("error");

    if (checkbox.checked == false) {
        errorMsg.textContent = "Please agree to the terms and conditions";
        return false;
    } 
    errorMsg.textContent = "";
    return true;
}