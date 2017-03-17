var apiKey = require('./../.env').apiKey;

function Calculator() {};

Calculator.prototype.getDoctors = function(newInput) {
  var result = ""
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + newInput + '&user_key=' + apiKey)
    .then(function(response) {
      result = response.doctor.profile.slug;
    })
    .fail(function(error) {
      result = error.responseJSON.message;
    });
  return result;
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
