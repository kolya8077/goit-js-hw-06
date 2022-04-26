const refs = {
  input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', () => {
  if (refs.input.value.length == refs.input.dataset.length) {
    return refs.input.classList.add("valid");
  };
    return refs.input.classList.add("invalid");
});
