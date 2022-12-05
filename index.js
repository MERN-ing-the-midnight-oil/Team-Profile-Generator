const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");
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
			managerSnippet(manager); //I want to send "manager" to managerSnippet to create the manager HTML
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
			} else if (response.another == "Intern") {
				internMaker();
			} else {
				console.log("add a snippet to the HTML");
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
			console.log(engineer);
			//send engineer to engineerSnippet
			engineerSnippet(engineer);
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
			console.log(intern);
			//execute a function that adds an intern card to the HTML
		});
	membersMenu(); //takes us back to the menu
};

managerMaker(); //this starts off the applicaiton by asking the user for manager information.

//HTML SNIPPETS
//I'd like to append some new HTML to the index.html file using a function
//maybe I could use "simple string operations" ie.e. slice and concat as described here
//https://stackoverflow.com/questions/44127153/how-to-append-a-code-snippet-to-html-using-node-fs
const managerSnippet = (manager) => {
	`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Manager</h5>
  <p class="card-text">Name: ${manager.name}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Email: ${manager.email}</li>
  <li class="list-group-item">ID: ${manager.id}</li>
  <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;
};
const engineerSnippet = (engineer) => {
	`<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Manager</h5>
  <p class="card-text">Name: ${engineer.name}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Email: ${engineer.email}</li>
  <li class="list-group-item">ID: ${engineer.id}</li>
  <li class="list-group-item">Office Number: ${engineer.github}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;
};
