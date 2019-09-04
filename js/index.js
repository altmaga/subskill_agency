// Click on eye to show password
// Click on secon eye to show two password
let pwdInputs = document.querySelectorAll('.pwd')
let pwdStatus = document.querySelectorAll('i#pass-status')

pwdInputs.forEach((input) => {
  pwdStatus.forEach((status) => {
    status.addEventListener('click', () => {
      if (input.type == 'password') {
        input.type = 'text';
        status.className = 'fa fa-eye-slash';
      }
      else {
        input.type = 'password';
        status.className = 'fa fa-eye';
      }
    })
  })
})

// Check onkeyup password
// Add color matching
function checkPass () {
  let password = document.querySelector('#password-field')
  let confirm = document.querySelector('#password-field-confirm')
  let messageMatch = document.querySelector('#confirm-message')
  let matchPwd = "#66cc66"
  let noMatchPwd = "#ff6666"

  if (password.value == confirm.value) {
    confirm.style.borderBottom = '1px solid' + matchPwd
  } else {
    confirm.style.borderBottom = '1px solid' + noMatchPwd
  }
}