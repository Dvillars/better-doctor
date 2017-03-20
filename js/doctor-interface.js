var Calculator = require('./../js/doctor.js').calculatorModule;

var displayDoctors = function(response) {
  var newOutput = "";
  for (var i = 0; i < response.data.length; i++) {
    if (response.data[i].profile.middle_name === undefined) {
      var currentOutput = response.data[i].profile.first_name + " " + response.data[i].profile.last_name;
    } else {
      var currentOutput = response.data[i].profile.first_name + " " + response.data[i].profile.middle_name + " " + response.data[i].profile.last_name;
    }
    if (i === response.data.length-1) {
      newOutput += currentOutput + ".";
    } else {
      newOutput += currentOutput + ", ";
    }

  }
  $(".result").text(newOutput);
}

$(document).ready(function() {
  var simpleCalculator = new Calculator();
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var newInput = $('#sickness').val().toLowerCase();

    $(".input").text(newInput);
    simpleCalculator.getDoctors(newInput, displayDoctors);
  });
});

//NOTE: was moved to backend
// $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + newInput + '&user_key=' + apiKey)
//   .then(function(response){
//     $('.input').text(newInput)
//     $('.result').text(response.doctor.profile.slug);
//   })
//   .fail(function(error) {
//     $('.results').text("")
//     $('.error').text(error.responseJSON.message);
//   });
