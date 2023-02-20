const refs = {      
    nameIn: document.querySelector('#name-input'),
    nameOut: document.querySelector('#name-output'),
}


refs.nameIn.addEventListener('input', onInputChange);

function onInputChange(event) {
    refs.nameOut.textContent = event.currentTarget.value.trim() === '' ? 'Anonymous' : event.currentTarget.value
};

