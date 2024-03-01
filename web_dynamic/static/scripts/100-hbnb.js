$(document).ready(() => {

  const SERVER_HOST = 'localhost';

  // Get API status
  $.get(`http://${SERVER_HOST}:5001/api/v1/status/`, data => {
    if (data.status == "OK") {
      $('DIV#api_status').addClass("available");
    } else {
      $('DIV#api_status').removeClass("available");
    }
  });

  // Update h2 tag with selected locations (states and cities)
  const updateLocations = (statesData, citiesData) => {
    const locations = Object.assign({}, statesData, citiesData);
    if (Object.values(locations).length === 0) {
      $('.locations h4').html('&nbsp;');
    } else {
      $('.locations h4').text(Object.values(locations).join(', '));
    }
  };

  // Obtain selected states
  const selectedStates = {};
  $('.locations ul h2 input[type="checkbox"]').click(() => {
    if ($(this).is(":checked")) {
      selectedStates[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete selectedStates[$(this).attr('data-id')];
    }
    updateLocations(selectedStates, selectedCities);
  });

  // Obtain selected cities
  const selectedCities = {};
  $('.locations ul ul li input[type="checkbox"]').click(() => {
    if ($(this).is(":checked")) {
      selectedCities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete selectedCities[$(this).attr('data-id')];
    }
    updateLocations(selectedStates, selectedCities);
  });

  // Obtain selected amenities
  const selectedAmenities = {};
  $('.amenities inpu

