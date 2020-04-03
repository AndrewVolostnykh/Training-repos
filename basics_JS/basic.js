function firstFunction()
{
	document.getElementById("first").innerHTML = "Another text";
	console.log("first paragraph has changet.");
}

function showAuthorInfo()
{
	window.alert("Andrew Volostykh \n KPI student \n java developer");
}

function inputUser()
{
	var name = document.getElementById("name").value;

	var user = {
		name:document.getElementById("name").value,
		surname:document.getElementById("surname").value,
		age:document.getElementById("age").value
	}
	document.getElementById("result").innerHTML = "Name: " + user.name + ", surname: " + user.surname + ", age: " + user.age;
}