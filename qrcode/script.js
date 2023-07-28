const qrText = document.getElementById('qr-text');
const generateBtn = document.getElementById('generateBtn');
const qrContainer = document.querySelector('.qr-body');


generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();  //Clicking is the default action of clic on a generate btn. The preventDefault() method prevents this from happening.
    isEmptyInput();
});

function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");
}
function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {      //QRCode is from pre-written qrcode.js
        text:qrText.value,
        height:200,
        width:200,
        colorLight:"#fff",
        colorDark:"#000",
    });
}

