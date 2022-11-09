const object = [
  {
      Name: 'Vladimir',
      fName: 'Filippov',
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
  
  },
  {
      Name: 'Vladimir',
      fName: 'Filippov',
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
  
  },
  ];
  
  function getContact() {
  
  object.forEach((personal) => {
    const { Name, fName, Contacts, bornDate, Family } = personal
  
  document.body.innerHTML += `
  <table>
    <tr>
      <th>Name</th>
      <th>Surname</th>
      <th>Phone</th>
      <th>Email</th>
      <th>Family</th>
    </tr>
    <tr>
  <td><div>${personal.Name}</div></td>
  <td><div>${personal.fName}</div></td>
  <td><div>${personal.Contacts.Phone}</div></td>
  <td><div>${personal.Contacts.Email}</div></td>
  <td><div>${personal.Family.Marriage}</div></td>
    </tr>
  </table>
  
  `
  
  })
    
  }