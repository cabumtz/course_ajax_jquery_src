$(document).ready(function(){

	$('#submitButton').click(function(){
		
		if($('#nameField').val() == 'Carlos') {
			alert('Hi Carlos');
		} else {
			alert('You are not Carlos');
		}
		
	});

});