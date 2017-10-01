/* Tabs implementation */
function sortBy(evt, type) {

	/* Get all elements with class="articles__tabcontent" and hide them */
	var tabcontent = document.getElementsByClassName('articles__tabcontent');
	for (var i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	/* Get all elements with class="articles__tablink" and remove the class "activetab" */
	var tablink = document.getElementsByClassName('articles__tablink');
	for (var i = 0; i < tablink.length; i++) {
		tablink[i].className = tablink[i].className.replace(' activetab', '');
	}

	/* Show the current tab, and add an "activetab" class to the link that opened the tab */
	document.getElementById(type).style.display = "block";
	evt.currentTarget.className += " activetab";

}

$(document).ready(function() {

	/* Get the element with id="defaultOpenTab" and click on it */
	document.getElementById('defaultOpenTab').click();

	$('.articles__item > h1').hover(function() {
		$(this).parents('.articles__item').find('img').toggleClass('hover');
	});

	/* Slider settings */
	$('.slider').bxSlider({
		auto: false,
		pause: 5000,
	});

	/* Selects settings */
	$('.search__select_region').select2({
		placeholder: "Select Region",
	});
	$('.search__select_category').select2({
		placeholder: "Select Category",
	});
	$('.search__select_date').select2({
		placeholder: "Select Date",
	});
	$('.search__select_price').select2({
		placeholder: "Select Price",
	});

	/* Make all selects disabled */
	var selectSearchNotFirst = $('.search__holiday .search__row:not(:first) select');
	selectSearchNotFirst.map(function(){
		$(this).prop('disabled', true);
	});

	/* Make selects included one after one */
	$('.search__holiday .search__row:eq(0) select').on('change', function (e) {
		$('.search__holiday .search__row:eq(1) select').prop('disabled', false);
	});
	$('.search__holiday .search__row:eq(1) select').on('change', function (e) {
		$('.search__holiday .search__row:eq(2) select').prop('disabled', false);
	});
	$('.search__holiday .search__row:eq(2) select').on('change', function (e) {
		$('.search__holiday .search__row:eq(3) select').prop('disabled', false);
	});

});