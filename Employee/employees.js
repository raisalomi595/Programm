const employees = [
    {name: "Luffy", salary: 10000},
    {name: "Zoro", salary: 8000},
    {name: "Nami", salary: 7000},
    {name: "Sanji", salary: 9000},
    {name: "Usopp", salary: 6000},
];

const getEmployees = employees.reduce(function (total, employee) {
    return total + employee.salary;

    
}, 0);

console.log("total employees:", getEmployees);


