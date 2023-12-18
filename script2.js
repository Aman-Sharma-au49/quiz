function nextquiz(event) {
    event.preventDefault();

    var nameInput = document.querySelector('input[type="text"]');
    var emailInput = document.querySelector('input[type="email"]');
    var phoneInput = document.querySelector('input[type="tel"]');

    if (nameInput.value.trim() === "" || emailInput.value.trim() === "" && phoneInput.value.trim() === "") {
        alert("Please fill out all required fields.");
        return false;
    } else if(!emailInput.value.trim().toLowerCase().endsWith("@gmail.com") && !emailInput.value.trim().toLowerCase().endsWith("@fosteringlinux.com")) {
        alert("Please fill out correct gmail");
        return false;
    } else if(phoneInput.value.trim().length !== 10 && phoneInput.value.trim().length !== 0 ) {
        alert("Please fill out correct Phone No");
        return false;
    } 

    window.location.href = "a.html";

    return true;
}
