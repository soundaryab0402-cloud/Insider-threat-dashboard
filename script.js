fetch("http://127.0.0.1:5000/employees")
.then(response => response.json())
.then(data => {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";

    data.forEach(emp => {
        let row = document.createElement("tr");

        // Name link to employee.html
        let nameCell = document.createElement("td");
        let nameLink = document.createElement("a");
        nameLink.href = `employee.html?name=${encodeURIComponent(emp.name)}&ip=${encodeURIComponent(emp.ip)}&risk=${emp.risk}&activity=${encodeURIComponent(emp.activity.join('|'))}`;
        nameLink.textContent = emp.name;
        nameCell.appendChild(nameLink);
        row.appendChild(nameCell);

        // IP
        let ipCell = document.createElement("td");
        ipCell.textContent = emp.ip;
        row.appendChild(ipCell);

        // Risk
        let riskCell = document.createElement("td");
        riskCell.textContent = emp.risk;
        row.appendChild(riskCell);

        // Level
        let levelCell = document.createElement("td");
        levelCell.textContent = emp.level;
        row.appendChild(levelCell);

        table.appendChild(row);
    });

    // Optionally create chart as before
});
