const addPeopleForm = document.getElementById('addPeopleForm');
const peopleListDiv = document.getElementById("peopleListDiv")
const people = [];

function renderPeople() {
  let peopleList = document.getElementById('peopleList');
  if (peopleList === null) {
    const table = document.createElement("table");
    peopleListDiv.append(table);
    table.setAttribute('id','peopleList');
    table.classList.add("tableList");
    const tr = document.createElement("tr");
    const personFirstName = document.createElement("td");
    const personLastName = document.createElement("td");
    const personDateOfBirth = document.createElement("td");
    const personWeight = document.createElement("td");
    personFirstName.textContent = "Имя";
    personLastName.textContent = "Фамилия";
    personDateOfBirth.textContent = "Дата рождения";
    personWeight.textContent = "Вес";
    tr.appendChild(personFirstName);
    tr.appendChild(personLastName);
    tr.appendChild(personDateOfBirth);
    tr.appendChild(personWeight);
    peopleList = document.getElementById('peopleList');
    peopleList.append(tr);
  };
  peopleList = document.getElementById('peopleList');
  people.forEach((newPerson => {
  const tr = document.createElement("tr");
  peopleList.append(tr);
  const personFirstName = document.createElement("td");
  const personLastName = document.createElement("td");
  const personDateOfBirth = document.createElement("td");
  const personWeight = document.createElement("td");
  personFirstName.textContent = newPerson.firstName;
  personLastName.textContent = newPerson.lastName; 
  personDateOfBirth.textContent = newPerson.dateOfBirth;
  personWeight.textContent = newPerson.weight; 
  tr.appendChild(personFirstName);
  tr.appendChild(personLastName);
  tr.appendChild(personDateOfBirth);
  tr.appendChild(personWeight);
  }));
  console.log(people);
}


function addPersonHandler(event) {
  event.preventDefault();
  const firstName = document.getElementById("firstNameInput").value;
  const lastName = document.getElementById("lastNameInput").value;
  const dateOfBirth = document.getElementById("dateInput").value;
  const weight = document.getElementById("weightInput").value;
  const newPerson = {
    firstName : firstName,
    lastName : lastName,
    dateOfBirth : dateOfBirth,
    weight : weight,
  };
  people.push(newPerson);
  renderPeople();
}
addPeopleForm.addEventListener("submit", addPersonHandler);




