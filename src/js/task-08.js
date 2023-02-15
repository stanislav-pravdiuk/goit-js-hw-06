const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    
    

    if (formElements.email.value === "" || formElements.password.value === "") {
        return alert("Всі поля повинні бути заповнені!");
    }

    const formData = {
        email,
        password,
    };

    console.log(formData);
}