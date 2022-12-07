const fs = require("fs");
function makeTeamHtml(data) {
	//data is a variable within this function declaration only
	teamCardsHtml = [];
	data.map((member) => {
		if (member.getRole() === "Manager") {
			teamCardsHtml.push(managerSnippetMaker(member));
		} else if (member.getRole() === "Engineer") {
			teamCardsHtml.push(engineerSnippetMaker(member));
		} else if (member.getRole() === "Intern") {
			teamCardsHtml.push(internSnippetMaker(member));
		}
	});
	return teamCardsHtml.join(""); // this shold join all the items of the array together into one string and it won't be an array anymore so that fs.writeFileSync can use the data.
}
//makes the top part of index.html
function makeTopHtml() {
	return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta
        http-equiv="X-UA-Compatible"
        content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0" />
        <link
        rel="stylesheet"
        href="bootstrap.css" />
      <title>My Team</title>
    </head>
    <body>`;
}
//makes the bottom part of index.html
function makeBottomHtml() {
	return `</body>
  </html>`;
}

//makes the card html for the manager
const managerSnippetMaker = (manager) => {
	return `<div class="card" style="width: 18rem;">
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
//makes the card html for any engineer objects created
const engineerSnippetMaker = (engineer) => {
	return `<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Engineer</h5>
  <p class="card-text">Name: ${engineer.name}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Email: ${engineer.email}</li>
  <li class="list-group-item">ID: ${engineer.id}</li>
  <li class="list-group-item">Github username: ${engineer.github}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;
};
//makes the card html for any intern objects created
const internSnippetMaker = (intern) => {
	return `<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Intern</h5>
  <p class="card-text">Name: ${intern.name}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Email: ${intern.email}</li>
  <li class="list-group-item">ID: ${intern.id}</li>
  <li class="list-group-item">Academic Institution: ${intern.school}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;
};
//makes consts available to index.js
module.exports = { makeTeamHtml, makeTopHtml, makeBottomHtml };
