
let peopleArr = [];
for (var key in localStorage) {
  peopleArr.push(JSON.parse(localStorage.getItem(key)))
}

// FILTERING AND SORTING PEOPLE
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

const filteredPeople = sortingArr(peopleArr)

// CREATING A HTML FOR EACH PERSON
let lp = 1;
filteredPeople.map((person) => {
    if ((person == null) || (person.day)) {
      return
    } else {
      const table = document.querySelector('.person-container');
      const tableRow = document.createElement('div');
      tableRow.classList.add('person');

      const rowContent = `
            <div class="person__lp">${lp++}</div>
            <div class="person__name">${person.name}</div>
            <div class="person__surname">${person.surname}</div>
            <div class="person__class">${person.classNum === '-1' ? '-' : person.classNum}</div>
            <div class="person__dinnerQuantity">${person.dinnerQuantity}</div>
            <div class="person__dinnerPrice">${person.dinnerPrice}zł</div>
            <div class="person__dinnerValue">${person.dinnerValue}zł</div>
            <div class="person__teaQuantity">${person.teaQuantity}</div>
            <div class="person__teaPrice">${person.teaPrice}zł</div>
            <div class="person__teaValue">${person.teaValue}zł</div>
            <div class="person__totalSum">${person.totalValue}zł</div>
            <div class="person__signature"></div>
        `
      // Appding item to the tableOutput
      tableRow.innerHTML = rowContent;
      table.appendChild(tableRow);
    }
  })




// GETTING DATA FOR SUMM ROW
const totalDinnerQuantity = filteredPeople.reduce((acc, currentValue) => {
  return acc + parseInt(currentValue.dinnerQuantity);
}, 0);

const totalDinnerValue = filteredPeople.reduce((acc, currentValue) => {
  return Math.round((acc + currentValue.dinnerValue) * 100) / 100;
}, 0);

const totalTeaQuantity = filteredPeople.reduce((acc, currentValue) => {
  return acc + parseInt(currentValue.teaQuantity);
}, 0);

const totalTeaValue = filteredPeople.reduce((acc, currentValue) => {
  return Math.round((acc + currentValue.teaValue) * 100) / 100;
}, 0);

const totalSum = filteredPeople.reduce((acc, currentValue) => {
  return Math.round((acc + currentValue.totalValue) * 100) / 100;;
}, 0);

const sumTable = document.querySelector('.sumTable');
const sumRow = document.createElement('div');
sumRow.classList.add('person');
const sumRowContent = `
    <div class="person__lp">${lp++}</div>
    <div class="person__name">RAZEM</div>
    <div class="person__surname"></div>
    <div class="person__class"></div>
    <div class="person__dinnerQuantity">${totalDinnerQuantity}</div>
    <div class="person__dinnerPrice"></div>
    <div class="person__dinnerValue">${totalDinnerValue}zł</div>
    <div class="person__teaQuantity">${totalTeaQuantity}</div>
    <div class="person__teaPrice"></div>
    <div class="person__teaValue">${totalTeaValue}zł</div>
    <div class="person__totalSum">${totalSum}zł</div>
    <div class="person__signature"></div>
`
// Appding item to the tableOutput
sumRow.innerHTML = sumRowContent;
sumTable.appendChild(sumRow);