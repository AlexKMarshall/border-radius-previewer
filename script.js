console.log('started');
const box = document.getElementById('box');
inputElements = document.querySelectorAll('input');
console.log(inputElements);
for (let i = 0; i < inputElements.length; i++) {
  console.log('added');
  inputElements[i].addEventListener('input', inputChanged);
}

function inputChanged(event) {
  document.documentElement.style.setProperty(
    `--${event.target.name}`,
    event.target.value
  )
}