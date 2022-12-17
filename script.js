
const txtFirstName = document.getElementById('first-name');
const txtLastName = document.getElementById('last-name');
const txtEmail = document.getElementById('email');
const txtPhone = document.getElementById('phone-number');
const txtPassword = document.getElementById('password');
const txtConfirmPassword = document.getElementById('confirm-password');
const btnSubmit = document.querySelector('.btn-submit');

function showInputError(id, errorMessage){
  let errorLabel = document.querySelector('.' + id + ' .error-label')
  errorLabel.innerText = errorMessage
  let element = document.getElementById(id)
  element.classList.add('error')
}
function removeInputError(id){
  let element = document.getElementById(id)
  let errorLabel = document.querySelector('.' + id + ' .error-label')
  element.classList.remove("error")
  errorLabel.innerText = ""
}

['first-name','last-name','email','phone-number','password','confirm-password'].forEach(id => {
  document.getElementById(id).addEventListener('change', function(e) {
    console.log('changed ' + id);

    let element = event.target
    removeInputError(id)

    if(element.value == ""){
      showInputError(id,"This field can't be empty")
      return;
    }

    if(id == 'confirm-password' || id == 'password'){
      let password = document.getElementById('password')
      let confirmPassword = document.getElementById('confirm-password')

      if(element.value.length < 8){
        showInputError(id, "Must be 8 characters or longer")
        return;
      }

      if(confirmPassword.value !== password.value && confirmPassword.value !== ""){
        showInputError('password',"Passwords don't match")
        showInputError('confirm-password', "Passwords don't match")
        return;
      } else if(confirmPassword.value !== "" && password.value !== "") {
        removeInputError('password')
        removeInputError('confirm-password')
      }
    }

  });
})

btnSubmit.addEventListener('click', function(e) {
  e.preventDefault();

  ['first-name','last-name','email','phone-number','password','confirm-password'].forEach(id => {
    let element = document.getElementById(id)
    if(element.value == ""){
      showInputError(id,"This field can't be empty")
    }
  });

  //checks if there are errors
  let error = false;
  ['first-name','last-name','email','phone-number','password','confirm-password'].forEach(id => {
    let element = document.getElementById(id)
    if(element.classList.contains('error')){
      error = true;
      return;
    }
  })

  if(error == true){
    return;
  }

  alert('You have signed in! and i am feeling lazy so this is it.');
});
