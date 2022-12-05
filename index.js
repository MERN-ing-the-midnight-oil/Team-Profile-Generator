const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerMaker = () => {
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
		})
		.then((response) => {
			moreMembers();
		});
};
const moreMembers = () => {
	inquirer
		.prompt([
			{
				type: "list",
				name: "another",
				message: "Would you like to add an Engineer or Intern?",
				choices: ["Engineer", "Intern", "No"],
			},
		])
		.then((response) => {
			if (response.another == "Engineer") {
				engineerMaker();
				//moreMembers(); //
				// we need moreMembers(); to be an option here but not happen automatically
			} else if (response.another == "Intern") {
				internMaker();
			} else {
				console.log("call template Helper");
				// we need moreMembers(); to be an option here but not happen automatically
			}
		});
};
const engineerMaker = () => {
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
};
const internMaker = () => {
	inquirer
		.prompt([
			{
				type: "input",
				message: "Enter the team intern's name",
				name: "internName",
			},
			{
				type: "input",
				message: "Enter the team intern's employee ID number",
				name: "internID",
			},
			{
				type: "input",
				message: "Enter the team intern's email address",
				name: "internEmail",
			},

			{
				type: "input",
				message: "Enter the team intern's school",
				name: "school",
			},
		])
		.then((response) => {
			const intern = new Intern(
				response.internName,
				response.internID,
				response.internEmail,
				response.school
			);
			console.log(intern);
		});
};

managerMaker();
