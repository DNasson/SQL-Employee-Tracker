const inquirer = require("inquirer");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dracie2018",
  database: "employee_db",
});

connection.query(
  "SELECT * FROM department LEFT JOIN role ON department.id = role.department_id LEFT JOIN employee ON role.id = employee.role_id",
    function (results, fields) {
      console.log(results);
      console.log(fields)
    }
  );
// Connect to database
inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Departments",
        "View all Roles",
        "View all Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
      ],
      name: "task",
    },
  ])
  .then((response) => {
    switch (response.task) {
      case "View All Departments":
        console.log("View All Departments");
        break;
      case "View all Roles":
        console.log("View all Roles");
        break;
      case "View all Employees":
        console.log("View all Employees");
        break;
      case "Add a Department":
        console.log("Add a Department");
        break;
      case "Add a Role":
        console.log("Add a Role");
        break;
      case "Add an Employee":
        console.log("Add an Employee");
        break;
      case "Update an Employee Role":
        console.log("Update an Employee Role");
        break;
    }
  });
