var apiKey = require('./../.env').apiKey;

function Calculator() {
  this.doctors = '';
}

Calculator.prototype.getDoctors = function(newInput, displayDoctors) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + newInput + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(response) {
      displayDoctors(response);
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
