const input = document.querySelector('[id= "name-input"]');
const nameLabel = document.querySelector('[id="name-output"]');
input.addEventListener('input', onInputChange);


function onInputChange(event) {
    console.log(event.currentTarget.value);
    nameLabel.textContent = event.currentTarget.value;
}



