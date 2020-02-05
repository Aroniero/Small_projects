
let peopleArr = [];
for (var key in localStorage) {
    peopleArr.push(JSON.parse(localStorage.getItem(key)))
}


const date = document.querySelector('.payDate');



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


    console.log('hello');

peopleArr.map((person) => {
  // console.log(person);
  if (person == null || person.day ) {
    return
  } else {
    const table = document.querySelector('.container');
    const stickyNote = document.createElement('div');
    stickyNote.classList.add('stickyNote');
    const date = JSON.parse(localStorage.getItem('date'));
    console.log(person.classNum);

    const rowContent = `
        <h4>Informacja dla ${person.classNum === '' ? 'nauczycieli' : `rodziców`}</h4>
        <h5>Uprzejmie proszę o wpłatę należności z tytułu <br/> dożywiania do p. Aldony Godlewskiej</h5>
        <div class="person-container">
          <div class="person ">${person.surname}  ${person.name}</div>
          <div class="classNum">${person.classNum === '' ? '' : `Klasa ${person.classNum}`}</div>
          <div class="dinners">Obiady: </div>
          <div class="dinnersValue">${person.dinnerQuantity} * ${person.dinnerPrice}zł = ${person.dinnerValue} zł</div>
          <div class="teas">Herbaty: </div>
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