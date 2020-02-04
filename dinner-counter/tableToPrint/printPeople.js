
let peopleArr = [];
for (var key in localStorage) {
  peopleArr.push(JSON.parse(localStorage.getItem(key)))
}

  peopleArr.map((person) => {
    if (person == null) {
      return
    } else {
      const table = document.querySelector('.table');
      const tableRow = document.createElement('div');
      tableRow.classList.add('person');
      console.log(tableRow);

      const rowContent = `
            <div class="person__name">${person.name}</div>
            <div class="person__surname">${person.surname}</div>
            <div class="person__class">${person.classNum}</div>
            <div class="person__dinnerQuantity">${person.dinnerQuantity}</div>
            <div class="person__dinnerPrice">${person.dinnerPrice}</div>
            <div class="person__dinnerValue">${person.dinnerValue}</div>
            <div class="person__teaQuantity">${person.teaQuantity}</div>
            <div class="person__teaPrice">${person.teaPrice}</div>
            <div class="person__teaValue">${person.teaValue}</div>
            <div class="person__totalSum">${person.totalValue}</div>
            <div class="person__signature"></div>
        `
      // Appding item to the tableOutput
      tableRow.innerHTML = rowContent;
      table.appendChild(tableRow);

    }
  })