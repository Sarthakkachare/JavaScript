function generateTables() {
    const number = parseInt(document.getElementById("number").value);
    const tablesDiv = document.getElementById("tables");
    tablesDiv.innerHTML = ''; // Clear any previous tables

    if (isNaN(number) || number < 1) {
        alert("Please enter a valid number greater than 0");
        return;
    }

    for (let i = 1; i <= number; i++) {
        const tableDiv = document.createElement('div');
        tableDiv.className = 'table';

        const tableTitle = document.createElement('h2');
        tableTitle.textContent = `Table of ${i}`;
        tableDiv.appendChild(tableTitle);

        for (let j = 1; j <= 10; j++) {
            const tableRow = document.createElement('p');
            tableRow.textContent = `${i} x ${j} = ${i * j}`;
            tableDiv.appendChild(tableRow);
        }

        tablesDiv.appendChild(tableDiv);
    }
}
