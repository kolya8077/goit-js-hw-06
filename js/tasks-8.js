const refs = {
  form: document.querySelector("form.login-form"),
};

refs.form.addEventListener("submit", onFormSumbit);

function onFormSumbit(event) {
  event.preventDefault();

  const formElem = event.currentTarget.elements;

  const email = formElem.email.value;
  const password = formElem.password.value;

  if (password === "" || email === "") {
    alert('Поле "Password" не заповнено');
    return false;
  }

  const formData = {
    email,
    password,
  };
  event.currentTarget.reset();
  console.log(formData);
}
