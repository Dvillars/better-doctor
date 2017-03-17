var Calculator = require('./../js/doctor.js').calculatorModule;

var displayDoctors = function(response) {
  var newOutput = "";
  for (var i = 0; i < response.data.length; i++) {
    var currentOutput = response.data[i].profile.slug;
    newOutput += currentOutput + ", ";
  }
  console.log(newOutput);
  return newOutput;
}

$(document).ready(function() {
  var simpleCalculator = new Calculator();
  $('#doctor-form').submit(function(event) {
    event.preventDefault();
    var newInput = $('#sickness').val().toLowerCase();
    // var newOutput = simpleCalculator.getDoctors(newInput);

    $(".input").text(newInput);
    $(".result").text(simpleCalculator.getDoctors(newInput, displayDoctors));
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
