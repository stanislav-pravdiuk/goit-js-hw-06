const refs = {      
    dataIn: document.querySelector('#validation-input'),
}

refs.dataIn.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    event.currentTarget.classList.remove('invalid', 'valid')
if (event.currentTarget.value.length === parseInt(refs.dataIn.dataset.length)) {
    event.currentTarget.classList.add('valid')
} else {
    event.currentTarget.classList.add('invalid')
} 
};

