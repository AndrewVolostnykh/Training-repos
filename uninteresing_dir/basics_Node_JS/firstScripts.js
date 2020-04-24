$('document').ready(function()
{
	jQuery('body').append('<a href="http://google.com">Go to google</a>');

	$('button').on('click', function(){
		var value1, value2, result;
		value1 = parseInt($('#val1').val());
		value2 = parseInt($('#val2').val());

		result = value1 + value2;
		alert("sum: " + result);
	});

	$('.userInputs').on('keyup', function(){
		var name, surname, aboutUser;
		name = $('#name').val();
		surname = $('#surname').val();

		aboutUser = "Name: " + name
					+ ", surname: " + surname;

		$('#aboutUser').html(aboutUser);
	});
});