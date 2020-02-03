


// Functions
function addItem(e) {
  e.preventDefault()
  // Information
  const name = document.querySelector('#name').value;
  const surname = document.querySelector('#surname').value;
  const classNum = document.querySelector('#classNum').value;
  // Dinner
  const dinnerQuantity = document.querySelector('#dinnerQuantity').value;
  const dinnerPrice = document.querySelector('#dinnerPrice').value;
  // Tea
  const teaQuantity = document.querySelector('#teaQuantity').value;
  const teaPrice = document.querySelector('#teaPrice').value;

  // Value
  let dinnerValue = Math.round(parseFloat(dinnerQuantity) * parseFloat(dinnerPrice));
  let teaValue = Math.round(parseFloat(teaQuantity) * parseFloat(teaPrice));

  // Total value
  let totalValue = (dinnerValue + teaValue)
  totalValue = Math.round(totalValue * 100) / 100

  const table = document.querySelector('#tableOutput');
  const tableRow = document.createElement('tr');
  const rowContent = `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${classNum}</td>
        <td>${dinnerQuantity}</td>
        <td>${dinnerPrice}zł</td>
        <td>${dinnerValue}zł</td>
        <td>${teaQuantity}</td>
        <td>${teaPrice}zł</td>
        <td>${teaValue}zł</td>
        <td>${totalValue}zł</td>
        <td><button type="button" class="btn btn-danger">Usuń</button></td>
        <td><button type="button" class="btn btn-warning">Edytuj</button></td>
  `

  tableRow.innerHTML = rowContent;
  table.append(tableRow);
  tableRow.querySelector('.btn-danger').addEventListener('click', removeItem)

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