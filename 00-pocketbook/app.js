$(document).ready(function(){
	 $('form').submit(function(event){
	 	event.preventDefault();
		var firstname = $('#first').val();
		if (firstname === ""){
		$('.first-name-error').html('please enter you firstname');
		};

		var lastname = $('#last').val();
		if (lastname === ""){
			$('.last-name-error').html('please enter you lastname');
		};

		var email = $('#email').val();
		if (email === ""){
			$('.email-error').html("please enter you email")
		}

		var password = $('#password').val();
		if (password === "") {
			$('.password-error').html("please enter you password");
		}
	});
});