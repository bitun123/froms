function signup(event) {
    event.preventDefault();
    let form= document.forms.register;
    let user={
        firstname: form.elements.firstname.value,
        lastname: form.elements.lastname.value,
        email: form.elements.email.value,
        password: form.elements.password.value
    }
console.log(user);
}