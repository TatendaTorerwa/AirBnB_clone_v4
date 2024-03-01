$(document).ready(() => {
    const chosenAmenity = []
    $('input:checkbox').click(() =>{
        if($(this).is(":checked")) {
	    chosenAmenity.push($(this).attr('data-name'));
	} else {
	    const index = chosenAmenity.indexOf($(this).attr('data-name'));
	    chosenAmenity.splice(index, 1);
	}
	$('.amenities h4').text(chosenAmenity.join(','));
  });
});
