



// DISPLAYING ITEMS ON THE TABLE showcase
  // GETTING ARRAY OF PEOPLE
  let peopleArr = [];

  for (var key in localStorage) {
    peopleArr.push(JSON.parse(localStorage.getItem(key)))
  }
  // console.log(peopleArr);

  function sortingArr(arr) {
    const filteredPeople = arr.filter((person) =>
      person !== null
    ).filter((person) =>
      person.hasOwnProperty('name') ? person : ''
    )
    // console.log(filteredPeople);


    return filteredPeople.sort((a, b) => {
      // console.log(parseInt(a.classNum), parseInt(b.classNum));
      return parseFloat(a.classNum) < parseFloat(b.classNum) ? -1 : 1
    })
  }



    // console.log(sorted);

// CREATING A HTML FOR EACH PERSON
sortingArr(peopleArr).map((person) => {
    if (person == null || (person.day)) {
      return
    } else {
      const table = document.querySelector('#tableOutput');
      const tableRow = document.createElement('tr');
      const rowContent = `
            <td class="name">${person.name}</td>
            <td class="surname">${person.surname}</td>
            <td class="classNum">${person.classNum === '-1' ? '-' : person.classNum}</td>
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

  // console.log(sortingArr(peopleArr));


// GETTING DATA FOR SUMM ROW
const totalDinnerQuantity = sortingArr(peopleArr).reduce((acc, currentValue) => {
  return acc + parseInt(currentValue.dinnerQuantity);
}, 0);

const totalDinnerValue = sortingArr(peopleArr).reduce((acc, currentValue) => {
  return Math.round((acc + currentValue.dinnerValue) * 100) / 100;
}, 0);

const totalTeaQuantity = sortingArr(peopleArr).reduce((acc, currentValue) => {
  return acc + parseInt(currentValue.teaQuantity);
}, 0);

const totalTeaValue = sortingArr(peopleArr).reduce((acc, currentValue) => {
  return Math.round((acc + currentValue.teaValue) * 100) / 100;
}, 0);

const totalSum = sortingArr(peopleArr).reduce((acc, currentValue) => {
  return Math.round((acc + currentValue.totalValue)*100)/100;
}, 0);

const sumRowContainer = document.querySelector('.sumRowContainer');
const sumTableRow = document.createElement('tr');
sumTableRow.classList.add('thead-dark');
const sumRowContent = `
      <th scope="col">RAZEM</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col totalDinnerQuantity">${totalDinnerQuantity}</th>
      <th scope="col "></th>
      <th scope="col totalDinnerValue">${totalDinnerValue}zł</th>
      <th scope="col totalTeaQuantity">${totalTeaQuantity}</th>
      <th scope="col"></th>
      <th scope="col totalTeaValue">${totalTeaValue}zł</th>
      <th scope="col sumTotal">${totalSum}zł</th>
`
// Appding item to the tableOutput
sumTableRow.innerHTML = sumRowContent
sumRowContainer.appendChild(sumTableRow);






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
    const classNum = document.querySelector('.classNum').value;
    // Dinner
    let dinnerQuantity = document.querySelector('#dinnerQuantity').value;
    let dinnerPrice = document.querySelector('#dinnerPrice').value;
    // Tea
    let teaQuantity = document.querySelector('#teaQuantity').value;
    let teaPrice = document.querySelector('#teaPrice').value;
    console.log(name, surname);
    // Value
    let dinnerValue = parseFloat(dinnerQuantity) * parseFloat(dinnerPrice);
    let teaValue = parseFloat(teaQuantity) * parseFloat(teaPrice);

        dinnerValue = Math.round(dinnerValue * 100) / 100;
        teaValue = Math.round(teaValue * 100) / 100;



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
    dinnerForm.reset();

    location.reload();
    return false;

  }

  const dinnerForm = document.querySelector('#dinnerForm');
  dinnerForm.addEventListener('submit', addItem)



// REMOVING ITEM FROM THE TABLE
  const deleteButtons = document.querySelectorAll('.btn-danger');

  function removeItem() {
    const name = this.parentElement.parentElement.querySelector('.name').innerHTML;
    const surname = this.parentElement.parentElement.querySelector('.surname').innerHTML;


    localStorage.removeItem(`${name}-${surname}`);

    this.parentElement.parentElement.remove();


  }
  deleteButtons.forEach((singleButton) => {
    singleButton.addEventListener('click', removeItem)
    }
  );

// UPDATING STATE _________________________________________________
  function changeItem() {
    const currentRow = this.parentElement.parentElement;
    // console.log(currentRow);

    // ROW INFORMATIONS
      let currName = currentRow.querySelector('.name').innerText;
      const currSurname = currentRow.querySelector('.surname').innerText;
      const currClassNum = currentRow.querySelector('.classNum').innerHTML;
      // console.log(currClassNum, currSurname);

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
      let inputclassNum = document.querySelector('.classNum');
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




