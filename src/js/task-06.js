const refs = {      
    dataIn: document.querySelector('#validation-input'),
}

refs.dataIn.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
event.currentTarget.value.length == refs.dataIn.dataset.length ?
        event.currentTarget.classList.add('valid') : 
        event.currentTarget.classList.add('invalid')
};


