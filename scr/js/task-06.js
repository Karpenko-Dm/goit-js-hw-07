const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    input.length = event.currentTarget.value.length;
    
    if (Number(inputLength) === input.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
    }
};

