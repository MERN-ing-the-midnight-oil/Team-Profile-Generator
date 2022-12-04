const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");

//collecting manager information using inquirer.
inquirer
	.prompt([
		{
			type: "input",
			message: "Enter the team manager's name",
			name: "managerName",
		},
		{
			type: "input",
			message: "Enter the team manager's employee ID number",
			name: "managerID",
		},
		{
			type: "input",
			message: "Enter the team manager's email address",
			name: "managerEmail",
		},

		{
			type: "input",
			message: "Enter the team manager's office number",
			name: "officeNumber",
		},
	])
	//constructing a manager object from the collected user information
	.then((response) => {
		const manager = new Manager(
			response.managerName,
			response.managerID,
			response.managerEmail,
			response.officeNumber
		);
		console.log(manager);
	});

inquirer
	.prompt([
		{
			type: "input",
			message: "Enter the team engineer's name",
			name: "engineerName",
		},
		{
			type: "input",
			message: "Enter the team engineer's employee ID number",
			name: "engineerID",
		},
		{
			type: "input",
			message: "Enter the team engineer's email address",
			name: "engineerEmail",
		},

		{
			type: "input",
			message: "Enter the team engineer's github username",
			name: "github",
		},
	])
	.then((response) => {
		const engineer = new Engineer(
			response.engineerName,
			response.engineerID,
			response.engineerEmail,
			response.github
		);
		console.log(engineer);
	});

// {
// 	type: "asdf",
// 	message:
// 		"asdf",
// 	name: "asdf",
// },
