

// Functions
function addItem(e) {
  e.preventDefault()
  let name = document.querySelector('#name');
  let surname = document.querySelector('#surname');
  let classNum = document.querySelector('#classNum');
  // Dinner
  let dinnerQuantity = document.querySelector('#dinnerQuantity');
  let dinnerPrice = document.querySelector('#dinnerPrice');
  // Tea
  let teaQuantity = document.querySelector('#teaQuantity');
  let teaPrice = document.querySelector('#teaPrice');
  // Information

  // Value
  let dinnerValue = Math.round(parseFloat(dinnerQuantity.value) * parseFloat(dinnerPrice.value));
  let teaValue = Math.round(parseFloat(teaQuantity.value) * parseFloat(teaPrice.value));

  // Total value
  let totalValue = (dinnerValue + teaValue)
  totalValue = Math.round(totalValue * 100) / 100

  const table = document.querySelector('#tableOutput');
  const tableRow = document.createElement('tr');
  const rowContent = `
        <td class="name">${name.value}</td>
        <td class="surname">${surname.value}</td>
        <td class="classNum">${classNum.value}</td>
        <td class="dinnerQuantity">${dinnerQuantity.value}</td>
        <td class="dinnerPrice">${dinnerPrice.value}zł</td>
        <td class="dinnerValue">${dinnerValue}zł</td>
        <td class="teaQuantity">${teaQuantity.value}</td>
        <td class="teaPrice">${teaPrice.value}zł</td>
        <td class="teaValue">${teaValue}zł</td>
        <td class="totalValue">${totalValue}zł</td>
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
  name.value = '';
  surname.value = '';
  classNum.value = '';
  dinnerQuantity.value = '';
  teaQuantity.value = '';




}


// Adding item to the table
  const dinnerForm = document.querySelector('#dinnerForm');
  dinnerForm.addEventListener('submit', addItem)




// REMOVING ITEM FROM THE TABLE
  const deleteButtons = document.querySelectorAll('.btn-danger');

  function removeItem() {
    this.parentElement.parentElement.remove();

    // singleButton.parentElement.parentElement.remove();
  }
  deleteButtons.forEach((singleButton) => {
    singleButton.addEventListener('click', removeItem)
  }
  );

// UPDATING STATE _________________________________________________

const updateButtons = document.querySelectorAll('.btn-warning');
updateButtons.forEach(updateButton => {
  updateButton.addEventListener('click', changeItem)
});


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


