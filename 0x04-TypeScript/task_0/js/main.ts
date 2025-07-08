interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 22,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 21,
  location: "London",
};

// Add the students to an array
const studentsList: Student[] = [student1, student2];

// Create a table
const table: HTMLTableElement = document.createElement("table");
const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();

const th1: HTMLTableCellElement = document.createElement("th");
th1.textContent = "First Name";
const th2: HTMLTableCellElement = document.createElement("th");
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);

const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = tbody.insertRow();
  const cell1: HTMLTableCellElement = row.insertCell();
  cell1.textContent = student.firstName;

  const cell2: HTMLTableCellElement = row.insertCell();
  cell2.textContent = student.location;
});

table.appendChild(tbody);
document.body.appendChild(table);
