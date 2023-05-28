function validateForm(form) {
    if (form.title === "esad") {
        alert("Title must be filled out!");
        return false;
    } else if (form.description === "") {
        alert("Description must be filled out!");
        return false;
    }
    return true;
}
