url = 'https://reqres.in/api/users?per_page=12'
urlF = 'https://reqres.in/api/users?per_page=1'


const totalUserList = () => {

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.data.forEach(user => console.log(user));
    })

}

const allSurnames = () => {

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.data.forEach(user => console.log(user.last_name));
    })

}

const allDataSurnamesF = () => {

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      data.data.forEach((user) => {
        const letterCheck = user.last_name.startsWith('F')
        if (letterCheck) {
          console.log(user)
        }
      })
    })
    
}

const allDataReduce = () => {

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const resultPrefix = 'Наша база содержит данные следующих пользователей:'
      const resultText = data.data.reduce((previousValue, currentValue) => {
        const { first_name, last_name } = currentValue
        return previousValue + `\n ${first_name} ${last_name};`
      }, resultPrefix)
      console.log(resultText)
    })
}

const totalKeys = () => {

  fetch(urlF)
    .then(response => response.json())
    .then((data) => {
      data.data.forEach((user) => {
        Object.keys(user).forEach((keyName) => {
          console.log(keyName)
        })
      })
    })
}