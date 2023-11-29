const form = document.getElementById("contact-form")
const email = document.getElementById("email");
const name = document.getElementById("name");
const comments = document.getElementById("comments");
const error_message = document.getElementById("error")
const info_message = document.getElementById("info")


// validity checks
document.addEventListener("DOMContentLoaded", function() {
    if (email.validity.typeMismatch || email.validity.valueMissing) {
        email.setCustomValidity("An email address is expected!");
    } else {
        email.setCustomValidity("");
    }

    if (name.validity.valueMissing) {
        name.setCustomValidity("The name field cannot be empty!");
    } else {
        name.setCustomValidity("");
    }

    if (comments.validity.valueMissing) {
        comments.setCustomValidity("The message field cannot be empty!");
    } else {
        comments.setCustomValidity("");
    }
})

email.addEventListener("input", (event) => {
    if (email.validity.typeMismatch || email.validity.valueMissing) {
        email.setCustomValidity("An email address is expected!");
    } else {
        email.setCustomValidity("");
    }
});

name.addEventListener("input", (event) => {
    if (name.validity.valueMissing) {
        name.setCustomValidity("The name field cannot be empty!");
    } else {
        name.setCustomValidity("");
    }
});

comments.addEventListener("input", (event) => {
    if (comments.validity.valueMissing) {
        comments.setCustomValidity("The message field cannot be empty!");
    } else {
        comments.setCustomValidity("");
    }

    // pattern="[a-zA-Z0-9]*"
    if(/[@#$%^&*()_+\-=\[\]{}\\|<>\/]/.test(comments.value)){
        comments.classList.add("invalid");
        error_message.value = "Please only include numbers, letters and punctuations";
        error_message.classList.add("invalid");
    }else{
        comments.classList.remove("invalid")
        error_message.value = ""
        error_message.classList.remove("invalid");
    }

    if(comments.maxLength - comments.value.length <= 10){
        info_message.value = `Current number of characters: ${comments.value.length} out of maxLength: ${comments.maxLength}`;
    }else{
        info_message.value = ""
    }
});