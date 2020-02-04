

// DISPLAYING ITEMS ON THE TABLE
let peopleArr = [];
for (var key in localStorage) {
  peopleArr.push(JSON.parse(localStorage.getItem(key)))
}

peopleArr.map((person) => {
  if (person == null) {
    return
  } else {
    const table = document.querySelector('#tableOutput');
    const tableRow = document.createElement('tr');
    const rowContent = `
          <td class="name">${person.name}</td>
          <td class="surname">${person.surname}</td>
          <td class="classNum">${person.classNum}</td>
          <td class="dinnerQuantity">${person.dinnerQuantity}</td>
          <td class="dinnerPrice">${person.dinnerPrice}zł</td>
          <td class="dinnerValue">${person.dinnerValue}zł</td>
          <td class="teaQuantity">${person.teaQuantity}</td>
          <td class="teaPrice">${person.teaPrice}zł</td>
          <td class="teaValue">${person.teaValue}zł</td>
          <td class="totalValue">${person.totalValue}zł</td>
          <td><button type="button" class="btn btn-danger">Usuń</button></td>
          <td><button type="button" class="btn btn-warning">Edytuj</button></td>
    `
    // Appending item to the tableOutput
    tableRow.innerHTML = rowContent;
    table.appendChild(tableRow);

    // Adding listeners to the new items
    tableRow.querySelector('.btn-warning').addEventListener('click', changeItem);
    tableRow.querySelector('.btn-danger').addEventListener('click', removeItem);
  }
})


// Person instance
class Person {
  constructor(name, surname, classNum, dinnerQuantity, dinnerPrice, dinnerValue, teaQuantity, teaPrice, teaValue, totalValue) {
    this.name = name;
    this.surname = surname;
    this.classNum = classNum;
    // DINNER
    this.dinnerQuantity = dinnerQuantity;
    this.dinnerPrice = dinnerPrice;
    this.dinnerValue = dinnerValue
    // TEA
    this.teaQuantity = teaQuantity;
    this.teaPrice = teaPrice;
    this.teaValue = teaValue;
    // Total value
    this.totalValue = totalValue;

  }
}


// Adding item to the table
  function addItem(e) {
    e.preventDefault()

    // Information
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let classNum = document.querySelector('#classNum').value;
    // Dinner
    let dinnerQuantity = document.querySelector('#dinnerQuantity').value;
    let dinnerPrice = document.querySelector('#dinnerPrice').value;
    // Tea
    let teaQuantity = document.querySelector('#teaQuantity').value;
    let teaPrice = document.querySelector('#teaPrice').value;

    // Value
    let dinnerValue = Math.round(parseFloat(dinnerQuantity) * parseFloat(dinnerPrice));
    let teaValue = Math.round(parseFloat(teaQuantity) * parseFloat(teaPrice));


    // Total value
    let totalValue = (dinnerValue + teaValue)
    totalValue = Math.round(totalValue * 100) / 100


    // Adding person to the localstorage
    const person = new Person(name, surname, classNum, dinnerQuantity, dinnerPrice, dinnerValue, teaQuantity, teaPrice, teaValue, totalValue);


    localStorage.setItem(`${person.name}-${person.surname}`, JSON.stringify(person) )

    // CREATING A ROW FOR ITEM
    const table = document.querySelector('#tableOutput');
    const tableRow = document.createElement('tr');
    const rowContent = `
          <td class="name">${person.name}</td>
          <td class="surname">${person.surname}</td>
          <td class="classNum">${person.classNum}</td>
          <td class="dinnerQuantity">${person.dinnerQuantity}</td>
          <td class="dinnerPrice">${person.dinnerPrice}zł</td>
          <td class="dinnerValue">${person.dinnerValue}zł</td>
          <td class="teaQuantity">${person.teaQuantity}</td>
          <td class="teaPrice">${person.teaPrice}zł</td>
          <td class="teaValue">${person.teaValue}zł</td>
          <td class="totalValue">${person.totalValue}zł</td>
          <td><button type="button" class="btn btn-danger">Usuń</button></td>
          <td><button type="button" class="btn btn-warning">Edytuj</button></td>
    `

    // Appending item to the tableOutput
    tableRow.innerHTML = rowContent;
    table.appendChild(tableRow);

    // Adding listeners to the new items
    tableRow.querySelector('.btn-warning').addEventListener('click', changeItem);
    tableRow.querySelector('.btn-danger').addEventListener('click', removeItem);

    // Clearing inputs
    // name.value = '';
    // surname.value = '';
    // classNum.value = '';
    // dinnerQuantity.value = '';
    // teaQuantity.value = '';

  }

  const dinnerForm = document.querySelector('#dinnerForm');
  dinnerForm.addEventListener('submit', addItem)



// REMOVING ITEM FROM THE TABLE
  const deleteButtons = document.querySelectorAll('.btn-danger');

  function removeItem() {
    const name = this.parentElement.parentElement.querySelector('.name').innerHTML;
    const surname = this.parentElement.parentElement.querySelector('.surname').innerHTML;


    console.log(localStorage.removeItem(`${name}-${surname}`));

    this.parentElement.parentElement.remove();


  }
  deleteButtons.forEach((singleButton) => {
    singleButton.addEventListener('click', removeItem)
    }
  );

// UPDATING STATE _________________________________________________

  function changeItem() {
    const currentRow = this.parentElement.parentElement;


    // ROW INFORMATIONS
      let currName = currentRow.querySelector('.name').innerText;


      const currSurname = currentRow.querySelector('.surname').innerText;
      const currClassNum = currentRow.querySelector('.classNum').innerText;

      // dinnerr
      const currDinnerQuantity = currentRow.querySelector('.dinnerQuantity').innerText;
      let currDinnerPrice = currentRow.querySelector('.dinnerPrice').innerText;
          currDinnerPrice = parseFloat(currDinnerPrice.replace('zł', ''));

      // tea
      const currTeaQuantity = currentRow.querySelector('.teaQuantity').innerText;
      let currTeaPrice = currentRow.querySelector('.teaPrice').innerText;
          currTeaPrice = parseFloat(currTeaPrice.replace('zł', ''));




    // INPUT INFORMATIONS
      let inputName = document.querySelector('#name');
      let inputSurname = document.querySelector('#surname');
      let inputclassNum = document.querySelector('#classNum');
      // Dinner
      const inputDinnerQuantity = document.querySelector('#dinnerQuantity');
      const inputDinnerPrice = document.querySelector('#dinnerPrice');

      // Tea
      const inputTeaQuantity = document.querySelector('#teaQuantity');
      const inputTeaPrice = document.querySelector('#teaPrice');



    // ASSIGNING ROW INFORMATIONS INTO INPUTS
      inputName.value = currName;

      inputSurname.value = currSurname;
      inputclassNum.value = currClassNum;
        // Dinner
      inputDinnerQuantity.value = currDinnerQuantity;
    inputDinnerPrice.value = currDinnerPrice;
        // Tea
      inputTeaQuantity.value = currTeaQuantity;
      inputTeaPrice.value = currTeaPrice;

      currentRow.remove();




  }

  const updateButtons = document.querySelectorAll('.btn-warning');
  updateButtons.forEach(updateButton => {
    updateButton.addEventListener('click', changeItem)
  });




