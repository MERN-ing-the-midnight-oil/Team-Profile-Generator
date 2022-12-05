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
			membersMenu();
		});
};
const membersMenu = () => {
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
				//membersMenu(); //
				// I think I need to await completion of engineerMaker before
			} else if (response.another == "Intern") {
				internMaker();
			} else {
				console.log("call template Helper");

				// we need membersMenu(); to be an option here but not happen automatically
			}
		});
};
const engineerMaker = async () => {
	//added async before the ()
	await inquirer //added awaid to inquirer.prompt , because I want to wait for that to finish and then go back to the menu
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
	membersMenu(); //takes us back to the menu afer new Engineer
};
const internMaker = async () => {
	await inquirer
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
	membersMenu(); //takes us back to the menu
};

managerMaker();
