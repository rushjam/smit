const passwordInput = document.querySelector('.password-input');
const btnSend = document.querySelector('.btn-send');
const btnUpload = document.querySelector('.btn-upload');
const btnFileUpload = document.querySelector('.btn-file-upload');
const uploadwrapper = document.querySelector('.upload-wrapper');
const sendWrapper = document.querySelector('.send-wrapper');
const passwordArray = [];
const primarySendBtn = document.querySelector('.primary-send-btn');

btnUpload.addEventListener('click', () => {
    console.log('ehllo');
    uploadwrapper.classList.add('visible');
});
 
primarySendBtn.addEventListener('click', () => {
    console.log('send clicked');
    sendWrapper.classList.add('visible');
});
passwordInput.addEventListener('input', (e) => {
   
    console.log(e.target.value);
    const userPassword = e.target.value;
    const mainPassword = '1234567'

    if(mainPassword === userPassword) {
        console.log('yesssssssssssssssssssssssssssssssh');

        btnSend.classList.add('btn-send-active');
        // document.querySelector('.btn-send').style.cursor = 'pointer !important';
    }
    else {
        btnSend.classList.remove('btn-send-active');
        // document.querySelector('.btn-send').style.cursor = 'not-allowed !important';

    }
});



