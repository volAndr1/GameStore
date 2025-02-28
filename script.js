function checkEmail(){
    let email = document.querySelector('#emailField').value;
    if(!email.includes('@')) alert('Missing @');
    else if (!email.includes('.')) alert ('Missing .');
    else alert('Subscription confirmed! Stay tuned for the best deals.');
}