const obj = {

  Personal: {
    Name: 'Vladimir',
    FamilyName: 'Filippov',
    Contacts: {
      Phone: 79242734991,
      Email: 'vladimir@mail.ru'
    },
    bornDate: {
      year: 1984,
      month: 01,
      day: 30
  },
    Family: {
      Marriage: 'yes',
      Children: 2,
      Petname: 'Smokey'
   }

}
};


function recursion(obj) {
  for (let item in obj)
  console.log(obj[item])

}


