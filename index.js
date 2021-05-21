( () => {
  // change color of input test
  const div = document.querySelector('#colorPickerApparence');
  const input = document.querySelector('#colorPickerInput');
  const teste = document.querySelector('#teste')

  div.addEventListener('click', event => {
    input.click();
  });

  input.addEventListener('input', () => {
    div.style.backgroundColor = input.value;
    teste.style.backgroundColor = input.value;
  });
})()
