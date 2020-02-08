



const date = document.querySelector('.payDate');





// Listening for change in "Month for payment" field
date.addEventListener('change', (e) => {
  const currDate = e.target.value;
  const year = currDate.slice(0,4);
  const month = currDate.slice(5,7);
  const day = currDate.slice(8,10);

  let actualDate = {
    day,
    month,
    year
  }
  localStorage.setItem('date', JSON.stringify(actualDate));

  location.reload();
})

// Listening for change in "Month for dinner" field
  let dinnerMonth = document.querySelector('.dinnerMonth');
  dinnerMonth.addEventListener('change', (e) => {
    localStorage.setItem('dinnerMonth', JSON.stringify(e.target.value));
    location.reload();
  })

// Listening for change in "Month for tea" field
  let teaMonth = document.querySelector('.teaMonth');
  teaMonth.addEventListener('change', (e) => {
    localStorage.setItem('teaMonth', JSON.stringify(e.target.value));
    location.reload();
  })


// Getting people from localstorage
let peopleArr = [];
for (var key in localStorage) {
    peopleArr.push(JSON.parse(localStorage.getItem(key)))
}
  // Sorting people by classNum
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

// Creating Sticky Notes and outputing them into HTML
sortingArr(peopleArr).map((person) => {
  // console.log(person);
  if (person == null || person.day ) {
    return
  } else {
    const table = document.querySelector('.container');
    const stickyNote = document.createElement('div');
    stickyNote.classList.add('stickyNote');
    // Getting month for payment, dinnerMonth and teaMonth from LS
    const date = JSON.parse(localStorage.getItem('date'));
    const dinnerMonth = JSON.parse(localStorage.getItem('dinnerMonth'))
    const teaMonth = JSON.parse(localStorage.getItem('teaMonth'))

    console.log(teaMonth);

    const rowContent = `
        <h4>Informacja dla ${person.classNum === '-1' ? 'nauczycieli' : `rodziców`}</h4>
        <h5>Uprzejmie proszę o wpłatę należności z tytułu <br/> dożywiania do p. Aldony Godlewskiej</h5>
        <div class="person-container">
          <div class="person ">${person.surname}  ${person.name}</div>
          <div class="classNum">${person.classNum === '-1' ? '' : `Klasa ${person.classNum}`}</div>
          <div class="dinners">Obiady (${dinnerMonth}): </div>
          <div class="dinnersValue">${person.dinnerQuantity} * ${person.dinnerPrice}zł = ${person.dinnerValue} zł</div>
          <div class="teas">Herbaty (${teaMonth}): </div>
          <div class="teasValue">${person.teaQuantity} * ${person.teaPrice}zł = ${person.teaValue} zł</div>
          <div class="total">Razem: </div>
          <div class="totalValue">${person.totalValue} zł</div>
        </div>
        <h4>Wpłatę proszę dokonać do <br/> ${date.day}-${date.month}-${date.year}<span>r.</span></h4>

        `
    // Appding item to the tableOutput
    stickyNote.innerHTML = rowContent;
    table.appendChild(stickyNote);

  }
})