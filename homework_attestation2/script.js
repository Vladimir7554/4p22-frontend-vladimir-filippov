const map = new Map()
const validateEmail = () => {
    const checkEmail = document.getElementById('email').value.trim()
    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isEmailValid = emailRegExp.test(checkEmail)
    const emailErrorNode = document.querySelector('[email-js-input-error]')
    const emailInputNode = document.getElementById("email")
    if (checkEmail.length === 0) {
        emailErrorNode.innerHTML = "Поле обязательно для заполнения"
        emailInputNode.style.borderColor = "var(--c-deepred)"
        return false;
    } else if (!isEmailValid) {
        emailErrorNode.innerHTML = "Email введён некорректно"
        emailInputNode.style.borderColor = "var(--c-deepred)"
        return false
    } else {
      emailErrorNode.innerHTML = ""
      emailInputNode.style.borderColor = "var(--c-darkgrey)"
        map.set("email", checkEmail)
        return true
    }
}
const validatePassword = () => {
    const checkPassword = document.getElementById('password').value.trim()
    const checkRepeatPassword = document.getElementById('password2').value.trim()
    const isPasswordValid = checkPassword.length
    const passwordErrorNode = document.querySelector('[password-js-input-error]')
    const passwordRepeatErrorNode = document.querySelector('[password2-js-input-error]')
    const passwordInputNode = document.getElementById("password")
    const passwordRepeatInputNode = document.getElementById("password2")
    if (checkPassword.length === 0) {
        passwordErrorNode.innerHTML = "Поле обязательно для заполнения"
        passwordInputNode.style.borderColor = "var(--c-deepred)"
        return false
    } else if (isPasswordValid < 8) {
        passwordErrorNode.innerHTML = "Пароль должен быть не менее 8 символов"
        passwordInputNode.style.borderColor = "var(--c-deepred)"
        return false
    } else {
        passwordErrorNode.innerHTML = ""
        passwordInputNode.style.borderColor = "var(--c-darkgrey)"
        map.set("Пароль", checkPassword)
    }
    if (checkRepeatPassword.length === 0 || checkRepeatPassword !== checkPassword) {
        passwordRepeatErrorNode.innerHTML = "Пароли не совпадают"
        passwordRepeatInputNode.style.borderColor = "var(--c-deepred)"
        return false
    } else {
        passwordRepeatErrorNode.innerHTML = ""
        passwordRepeatInputNode.style.borderColor = "var(--c-darkgrey)"
        map.set("Пароль (повтор)", checkRepeatPassword)
        return true
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const formNode = document.querySelector('[data-js-form]')
    formNode.addEventListener('submit', (event) => {
        event.preventDefault()
        validateEmail()
        validatePassword()
        let genderValue = document.getElementById('radio-male').checked ? 'Мужчина' : 'Женщина'
        map.set("Пол", genderValue)
        let textAreaValue = document.getElementById("textareas").value
        map.set("О себе", textAreaValue)
        let subcribeValue = document.getElementById('checkbox').checked ? 'Да' : 'Нет'
        map.set("Подписка", subcribeValue)
        if (validateEmail() && validatePassword()) {
            console.log(map)
        } else {
            console.log('Извините, но Вам вначале нужно корректно заполнить необходимые поля!')
        }
    })
})