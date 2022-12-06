// teamArray contains an array of newly created employees
const makeTeamHtml = (teamArray) => {
	//makeTeamHtml receives the teamArray
	return teamArray.map((member) => {
		//and does the following to each index of the array.
		if (member.getRole() === "Manager") {
			return managerSnippetMaker(member);
		} else if (member.getRole() === "Engineer") {
			return engineerSnippetMaker(member);
		} else if (member.getRole() === "Intern") {
			return internSnippetMaker(member);
		}
		//return `<p class="card-text">Name: ${member.name}</p>`; //should end up with an array of p tags
	});
};

const managerSnippetMaker = (manager) => {
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
const engineerSnippetMaker = (engineer) => {
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
const internSnippetMaker = (intern) => {
	`<div class="card" style="width: 18rem;">
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

// <div class="card" style="width: 18rem;">
//     <img class="card-img-top" src="..." alt="Card image cap">
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">Cras justo odio</li>
//       <li class="list-group-item">Dapibus ac facilisis in</li>
//       <li class="list-group-item">Vestibulum at eros</li>
//     </ul>
//     <div class="card-body">
//       <a href="#" class="card-link">Card link</a>
//       <a href="#" class="card-link">Another link</a>
//     </div>
//   </div>

//  call  fs.writeFileSync, push the array of  team members, then for each instance of a team member, a
//snippet will be created for them depending on their Class.

//maybe I could use "simple string operations" i.e. slice and concat as described here
//https://stackoverflow.com/questions/44127153/how-to-append-a-code-snippet-to-html-using-node-fs
module.exports = makeTeamHtml;
