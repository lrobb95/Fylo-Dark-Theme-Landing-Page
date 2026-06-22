const getEmail = document.getElementById('sign-up');
const errorMessage = document.getElementById('errorMessage');
const form = document.getElementById('form');
const getBtn = document.getElementById('submit-btn');

form.addEventListener('submit', (e) => {
    let message = [];

    if (getEmail.value === '' || getEmail.value == null) {
        message.push('Email is required');
    }

    else if (!getEmail.value.includes('@') || !getEmail.value.includes('.')) {
        message.push('Please enter a valid email address');
    } 

    if (message.length > 0) {
        e.preventDefault();
        getEmail.style.border = '1px solid rgb(255, 0, 0)';
        errorMessage.style.display = 'flex';
        errorMessage.style.alignContent = 'flex-start';
        errorMessage.style.width = '100%';
        errorMessage.style.marginLeft = 'clamp(1rem, 2.5vw, 3rem)';
        errorMessage.style.fontSize = 'var(--fs-p)';
        errorMessage.style.color = 'rgba(255, 0, 0, .35)';
        errorMessage.style.fontStyle = 'italic';
        errorMessage.innerText = message.join(', ');
    }
});