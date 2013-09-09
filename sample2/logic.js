$(document).ready(function(){

	$('#submitButton').click(function(){
		
		$.ajax({
			
			url: 'response.json',
			
			data: {
				action: 'find',
				username: $('#nameField').val()
			},

			type: 'GET',
			
			dataType : 'json',
			
			success: function( json ) {
				var responseDiv = $( '#responseDiv' );
				
				responseDiv
					.append($('<h3 />').text( json.username ))
					.append($('<img />').attr( 'src', json.avatar ))
					.append($('<p />').text( json.fullname ))


				$('<input type="button" id="logoutButton" name="logout" value="clean" />').appendTo( responseDiv );
			},
		});
		

	});

});