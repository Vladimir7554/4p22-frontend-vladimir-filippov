let map = new Map()


const validateEmail = () => {
  const checkEmail = document.getElementById('email').value
  const checkEmailTrim = checkEmail.trim()
  const emailAllowedMask = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const validEmail = emailAllowedMask.test(checkEmail)
  const querryEmail = document.querySelector('[email-js-input-error]')
  const elementEmail = document.getElementById("email")


  if (checkEmailTrim == "") {
    querryEmail.innerHTML = "Поле обязательно для заполнения"
    elementEmail.style.borderColor = "var(--c-deepred)"
    return false;
  }

  else if (validEmail === false) {
    querryEmail.innerHTML = "Email введён некорректно"
    elementEmail.style.borderColor = "var(--c-deepred)"
    return false
  }

  else {
    querryEmail.innerHTML = "";
    elementEmail.style.borderColor = "var(--c-darkgrey)"
    map.set("email", checkEmail)
    return true
    }
}

const validatePassword = () => {
  const checkPwd = document.getElementById('password').value
  const checkPwdTrim = checkPwd.trim()
  const checkPwdR = document.getElementById('password2').value
  const checkPwdrTrim = checkPwdR.trim()
  const validPwd = checkPwd.length
  const querryPwd = document.querySelector('[password-js-input-error]')
  const querryPwdR = document.querySelector('[password2-js-input-error]')
  const elementPwd = document.getElementById("password")
  const elementPwdR = document.getElementById("password2")

  if (checkPwdTrim == "") {
    querryPwd.innerHTML = "Поле обязательно для заполнения"
    elementPwd.style.borderColor = "var(--c-deepred)"
    return false
  }

  else if (validPwd < 8) {
    querryPwd.innerHTML = "Пароль должен быть не менее 8 символов"
    elementPwd.style.borderColor = "var(--c-deepred)"
    return false
  }

  else {
    querryPwd.innerHTML = ""
    elementPwd.style.borderColor = "var(--c-darkgrey)"
    map.set("Пароль", checkPwd)
  }


  if (checkPwdrTrim == "" || checkPwdrTrim !== checkPwd) {
    querryPwdR.innerHTML = "Пароли не совпадают"
    elementPwdR.style.borderColor = "var(--c-deepred)"
    return false
  }

  else {
    querryPwdR.innerHTML = ""
    elementPwdR.style.borderColor = "var(--c-darkgrey)"
    map.set("Пароль (повтор)", checkPwdR)
    return true
  }
}


document.addEventListener('DOMContentLoaded', () => {

  const formNode = document.querySelector('[data-js-form]')
  
  formNode.addEventListener('submit', (event) => {
    event.preventDefault()
    validateEmail()
    validatePassword() 
    let genderValue = document.getElementById('radio-male').checked?'Мужчина':'Женщина'
    map.set("Пол", genderValue)
    let textAreaValue = document.getElementById("textareas").value
    map.set("О себе", textAreaValue)
    let subcribeValue = document.getElementById('checkbox').checked?'Да':'Нет'
    map.set("Подписка", subcribeValue)

    if (validateEmail()  && validatePassword()) {
      console.log(map)
    }
    else {
      console.log('Извините, но Вам вначале нужно корректно заполнить необходимые поля!')
    }
  })
})

