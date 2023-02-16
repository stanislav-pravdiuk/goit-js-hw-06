const refs = {      
    dataIn: document.querySelector('#validation-input'),
}

refs.dataIn.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
if (event.currentTarget.classList.value == 'valid') {
    event.currentTarget.classList.replace('valid', 'invalid')    
} else if (event.currentTarget.classList.value == 'invalid') {
    event.currentTarget.classList.replace('invalid', 'valid')
} else if (event.currentTarget.value.length != refs.dataIn.dataset.length) {
    event.currentTarget.classList.add('invalid')
} else if (event.currentTarget.value.length == refs.dataIn.dataset.length) {
    event.currentTarget.classList.add('valid')
} 
};

