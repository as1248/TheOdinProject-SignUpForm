const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordConfirm');
const error = document.getElementsByClassName('error');

const onChange = () => {
  if(password.value == passwordConfirm.value && password.value != ''){
    error[0].innerText = '';
  }else{
    error[0].innerText = '* Passwords do not match';
  }
}

password.addEventListener('input', onChange);
passwordConfirm.addEventListener('input', onChange);