function nextquiz(event) {
    event.preventDefault();

    var nameInput = document.querySelector('input[type="text"]');
    var emailInput = document.querySelector('input[type="email"]');
    var phoneInput = document.querySelector('input[type="text"]');

    if (nameInput.value.trim() === "" || phoneInput.value.trim() === "" || emailInput.value.trim() === "") {
        alert("Please fill out all required fields.");
        return false;
    } else if(!emailInput.value.trim().toLowerCase().endsWith("@gmail.com")) {
        alert("Please fill out correct gmail");
        return false;
    }

    window.location.href = "a.html";

    return true;
}
