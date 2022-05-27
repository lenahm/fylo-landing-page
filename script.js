const headerForm = document.getElementById('header-content-form'); 
const inputHeaderForm = document.getElementById('header-content-form-input'); 
const earlyAccessForm = document.getElementById('early-access-form'); 
const inputEarlyAccessForm = document.getElementById('early-access-form-input'); 

headerForm.addEventListener('submit', e => {
    const inputValue = inputHeaderForm.value; 
    const parent = document.getElementById('header-content-info'); 
    const insertBeforeElement = document.getElementById('header-message-field'); 
    checkEmail(e, inputValue, parent, insertBeforeElement);  
}); 

earlyAccessForm.addEventListener('submit', e => {
    const inputValue = inputEarlyAccessForm.value; 
    const parent = earlyAccessForm;
    const insertBeforeElement = document.getElementById('early-access-form-submit'); 
    checkEmail(e, inputValue, parent, insertBeforeElement);  
});


function checkEmail(e, inputValue, parent, insertBeforeElement) {
    e.preventDefault();

    const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (regex.test(inputValue.trim())) {
        showAlert('Email address submitted', 'success', parent, insertBeforeElement); 
        inputHeaderForm.value = '';
        inputEarlyAccessForm.value = ''; 
    } else {
        showAlert('Please check your email', 'error', parent, insertBeforeElement);
    }
}

function showAlert(message, classname, parent, insertBeforeElement) {
    // clear any remaining alert 
    this.clearAlert(); 

    // create div 
    const div = document.createElement('div'); 
    div.className = `alert ${classname}`; 
    div.appendChild(document.createTextNode(message));

    // insert alert with timeout after 4 seconds 
    parent.insertBefore(div, insertBeforeElement); 
    setTimeout(() => {
        this.clearAlert(); 
    }, 4000); 
}

function clearAlert() {
    const currentAlert = document.querySelector('.alert'); 
    if (currentAlert) {
        currentAlert.remove(); 
    }
}