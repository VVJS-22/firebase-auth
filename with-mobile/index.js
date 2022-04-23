var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');

console.log(recaptcha)

function auth(){

    var number = '+91' + document.querySelector('input').value;
  
    firebase.auth().signInWithPhoneNumber(number, recaptcha).then( function(e) {
        console.log('Success');


        var 
            code = prompt('Enter OTP', '');

        
        if(code === null) return;

        
        e.confirm(code).then(function (result) {
            console.log('User', result.user);

            document.querySelector('label').textContent += 'Mobile Number ' + result.user.phoneNumber;
            
        }).catch(function (error) {
            console.error('Error', error);
            
        });

    })
    .catch(function (error) {
        console.error('Error', error);

    });
  
}