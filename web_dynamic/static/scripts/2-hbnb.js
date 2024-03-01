$(document).ready(() => {
  const selectedAmenities = [];
  $('input:checkbox').click(() => {
    if ($(this).is(":checked")) {
      selectedAmenities.push($(this).attr('data-name'));
    } else {
      const indexToRemove = selectedAmenities.indexOf($(this).attr('data-name'));
      selectedAmenities.splice(indexToRemove, 1);
    }
    $('.amenities h4').text(selectedAmenities.join(', '));
  });

  $.get("http://0.0.0.0:5001/api/v1/status/", (data) => {
    if (data.status === "OK") {
      $('DIV#api_status').addClass("available");
    } else {
      $('DIV#api_status').removeClass("available");
    }
  });
});
