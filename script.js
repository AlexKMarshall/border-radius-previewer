const box = document.getElementById('box');
const globalInput = document.getElementById('global-input');

box.style.borderRadius = '40px';

globalInput.addEventListener('input', () => {
  box.style.borderRadius = globalInput.value;
})