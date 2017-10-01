function validateForm() {
	if ($('.contact__form-name').val()  == "" || 
		 $('.contact__form-email').val() == "") {
		alert("All fields must be filled");
		return false;
	}
	if ($('.contact__form-textarea').val().length <= 2) {
		alert("The message is too short");
		return false;
	}
}

$(document).ready(function(){
	$('.slider').bxSlider({
		auto: true,
		pause: 5000
	});
	$('.price__btn').hover(function() {
		$(this).parents('.price__block').find('.price__head').toggleClass('hover');
	});
});