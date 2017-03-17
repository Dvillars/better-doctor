var apiKey = require('./../.env').apiKey;

function Calculator() {}

Calculator.prototype.getDoctors = function(newInput, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + newInput + '&limit=10&user_key=' + apiKey)
    .then(function(response) {
      return displayDoctors(response);
    })
    .fail(function(error) {
      console.log(error.responseJSON.message);
    });
};

exports.calculatorModule = Calculator;

//CHANGED: used too much front end varibles
// $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + newInput + '&user_key=' + apiKey)
//   .then(function(response){
//     $('.input').text(newInput)
//     $('.result').text(response.doctor.profile.slug);
//   })
//   .fail(function(error) {
//     $('.results').text("")
//     $('.error').text(error.responseJSON.message);
//   });
