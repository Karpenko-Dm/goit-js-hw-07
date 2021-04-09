const input = document.querySelector('[id= "name-input"]');
const nameLabel = document.querySelector('[id="name-output"]');
let strangerUser = 'незнакомец'

function onInputChange(event) {
    if (event.currentTarget.value === '') {
         nameLabel.textContent = strangerUser;
     
    } else {
          nameLabel.textContent = event.currentTarget.value;
    }
}
input.addEventListener('input', onInputChange);
  
    
    




