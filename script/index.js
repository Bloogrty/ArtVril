function toggleSidebar() {
    $('.sidebar').toggleClass('open');
}

function validateForm() {
    let checkbox = document.getElementById("agree");
    let errorMsg = document.getElementById("error");

    if (checkbox.checked === false) {
        errorMsg.textContent = "Please agree to the terms and conditions";
        return false;
    }
    errorMsg.textContent = "";
    return true;
}
