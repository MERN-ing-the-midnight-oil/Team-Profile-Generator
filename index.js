const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const makeTeamHtml = require("./src/templateHelper");
const teamArray = [];

const writeHtmlFile = () => {
	console.log(10, teamArray, 10);
	console.log(11, makeTeamHtml(teamArray), 11);
	fs.writeFileSync("index.html", makeTeamHtml(teamArray), "utf-8");
};

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
			teamArray.push(manager); //send the new manager object to the presently empty team array
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
				message: "Would you like to add an Engineer or Intern to the team?",
				choices: ["Engineer", "Intern", "Nope, I'm all done!"],
			},
		])
		.then((response) => {
			if (response.another == "Engineer") {
				engineerMaker();
			} else if (response.another == "Intern") {
				internMaker();
			} else {
				writeHtmlFile(); //!!!!
			}
		});
};
const engineerMaker = async () => {
	//async and await were needed to delay membersMenu from being called
	await inquirer
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
			teamArray.push(engineer); //add the new engineer to the team roster
		});

	membersMenu();
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
			teamArray.push(intern); //add the intern to the team roster
		});
	membersMenu(); //takes us back to the menu
};

managerMaker(); //this starts off the app by asking the user for manager information.
