const refs = {
    form: document.querySelector('.login-form')
}

refs.form.addEventListener('submit', onFormSumbit);

function onFormSumbit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);

    formData.forEach((value, name) => {
        console.log(name);
        console.log(value);
    });
}