const fs = require("fs");
const makeTeamHtml = (teamArray) => {
	teamHtml = [];
	teamArray.map((member) => {
		if (member.getRole() === "Manager") {
			teamHtml.push(managerSnippetMaker(member));
		} else if (member.getRole() === "Engineer") {
			teamHtml.push(engineerSnippetMaker(member));
		} else if (member.getRole() === "Intern") {
			teamHtml.push(internSnippetMaker(member));
		}
		return teamHtml.join(); // this shold join all the items of the array together into one string and it won't be an array anymore so that fs.writeFileSync can use the data.
	});
};

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
const engineerSnippetMaker = (engineer) => {
	return `<div class="card" style="width: 18rem;">
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
const internSnippetMaker = (intern) => {
	return `<div class="card" style="width: 18rem;">
<img class="card-img-top" src="..." alt="Card image cap">
<div class="card-body">
  <h5 class="card-title">Manager</h5>
  <p class="card-text">Name: ${intern.name}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Email: ${intern.email}</li>
  <li class="list-group-item">ID: ${intern.id}</li>
  <li class="list-group-item">Office Number: ${intern.school}</li>
</ul>
<div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
</div>
</div>`;
};

module.exports = makeTeamHtml;
module.exports.writeHTML;

// 1. Inside the makeTeamHtml in templateHelper.js, I could create a new variable (something like teamHTml) and set it equal to an empty array.

// 2. Remove the return statement in front of teamArray.map --we want to perform these actions on the teamArray array, but not return them just yet.

// 3. Then, for each conditional, instead of returning the results of each SnippetMaker function, just push those results into the teamHtml array.

// 4. After the mapping is done, return the teamHtml array, but with .join() --> return teamHtml.join(). That will join all the items of the array together into one string and it won't be an array anymore.
