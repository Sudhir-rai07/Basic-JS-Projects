function otp(){
    let otp = document.getElementById('otp');
    let generateOTP = Math.ceil(Math.random()*10000);
    otp.innerHTML = generateOTP;
    let btn = document.getElementById('btn')
    btn.style.backgroundColor = 'hotpink';
}