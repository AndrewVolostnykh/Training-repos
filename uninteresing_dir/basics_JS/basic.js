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

function changeColor(obj)
{
	var currnetColor = getComputedStyle(document.getElementById('color')).backgroundColor;
	if(currnetColor == 'rgb(102, 153, 255)')
	{
		obj.style.backgroundColor = '#cc66ff';
	} else {
		obj.style.backgroundColor = '#6699ff';
	}
}

function changeText(obj)
{
	var currentText = document.getElementById("text").textContent;
	if(currentText == 'Change text')
	{
		obj.innerHTML = "Nice! it Changed!";
	} else {
		obj.innerHTML = "Change text";
	}
}

function changeTextColor(obj)
{
	var text = document.getElementById("colorText").textContent;
	var color = getComputedStyle(document.getElementById('colorText')).backgroundColor;

	if(text == "Change color and text")
	{
		obj.innerHTML = "Okey, it changed!";
	} else {
		obj.innerHTML = "Change color and text";
	}

	if(color == 'rgb(102, 153, 255)')
	{
		obj.style.backgroundColor = '#cc66ff';
	} else {
		obj.style.backgroundColor = '#6699ff';
	}
}

function mouseOver(obj)
{
	obj.innerHTML = "NICE!";
	obj.style.backgroundColor = '#cc0066';
}

function mouseOut(obj)
{
	obj.innerHTML = "Mouser over me!!!";
	obj.style.backgroundColor = '#ff6699'

}