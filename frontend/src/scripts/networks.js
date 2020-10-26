var current;
var currentValues;
//cosmos[0];
//kava[1];
//iris[2];
//terra[3];
//kusama[4];
$.getScript('scripts/values.js', function(){

$('#cosmos-com').html('+'+values.atom.annual+"%");
$('#kava-com').html('+'+values.kava.annual+"%");
$('#iris-com').html('+'+values.iris.annual+"%");
$('#terra-com').html('+'+values.terra.annual+"%");
$('#kusama-com').html('+'+values.kusama.annual+"%");


var headerVisible = true;
$('.activeNetwork').click(function() {

  //$('header').addClass('hideheader',100);

  switch ($(this).attr('id')) {
    case 'cosmos':
      current = cosmos;
      currentValues = values.atom;
      break;
    case 'terra':
      current = terra;
      currentValues = values.terra;
      break;
    case 'iris':
      current = iris;
      currentValues = values.iris;
      break;
    case 'kusama':
      current = kusama;
      currentValues = values.kusama;
      break;
    case 'kava':
      current = kava;
      currentValues = values.kava;
      break;
  }
  //current
  if($( window ).width() > 960)
    //$([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+ $( window ).width()*0.18}, 1000);
    $([document.documentElement, document.body]).animate({scrollTop: $("#networks-header").offset().top+ $( window ).width()*0.03}, 1000);
  else if($( window ).width() > 1920)
    $([document.documentElement, document.body]).animate({scrollTop: $("#networks-header").offset().top}, 1000);
    //$([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top + $( window ).width()*0.9}, 1000);
  else
    $([document.documentElement, document.body]).animate({scrollTop: $("#networks").offset().top+280}, 1000);

  $('#project-name').html(current.name);
  $('#token').html(current.symbol);
  $('#price').html(current.current_price.toFixed(2) + "$");
  $('#price-label').html(current.symbol.toUpperCase() + " Price");
  $('#del-am-label').html("Delegated " + current.symbol.toUpperCase() + " Amount");
  $('#holdings-value').html((current.current_price*1000).toFixed(2) + "$");
  $('#annual-reward-rate').html((currentValues.annual).toFixed(2) + "%");
  $('#expected-reward-date').html(currentValues.interval + "%");
  $('#comission').html(currentValues.interval + "%");
  $('#comission').html(currentValues.annual + "%");
  $('#validator-address').html(currentValues.validatorAddress);
  $('#lets-stake').attr("href", currentValues.url);

  $('#ranger').val(1000);
  $('#delegated-amount').val(1000);
  $('#annual-result').html((currentValues.annual/100*1000).toFixed(2) + " " + current.symbol.toUpperCase());
  $('#monthly-result').html((currentValues.annual/100*1000/12).toFixed(2) + " " + current.symbol.toUpperCase());
  $('#daily-result').html((currentValues.annual/100*1000/365).toFixed(2) + " " + current.symbol.toUpperCase());
  $('#annual-result-dol').html((currentValues.annual/100*1000*current.current_price).toFixed(2) + "$");
  $('#monthly-result-dol').html((currentValues.annual/100*1000*current.current_price/12).toFixed(2) + "$");
  $('#daily-result-dol').html((currentValues.annual/100*1000*current.current_price/365).toFixed(2) + "$");
})



//monthly earnings we can take the yearly earnings/31 and for daily=yearly earnings/365.
//To show the price of these rewards in $ we then multiply each value with the price of the coin, which we received it by using API calls for each coin.
//These values increment in real-time when the user drags the bar or enters manually the number of coins he has.

$('#ranger').on('input', function () {
    $(this).trigger('change');
    $('#delegated-amount').val($(this).val());
    $('#holdings-value').html((current.current_price*$(this).val()).toFixed(2) + "$");
    $('#annual-result').html((currentValues.annual/100*$(this).val()).toFixed(2) + " " + current.symbol.toUpperCase());
    $('#annual-result-dol').html((currentValues.annual/100*$(this).val()*current.current_price).toFixed(2) + "$");
    $('#monthly-result').html((currentValues.annual/100*$(this).val()/12).toFixed(2) + " " + current.symbol.toUpperCase());
    $('#monthly-result-dol').html((currentValues.annual/100*$(this).val()*current.current_price.toFixed(2)/12).toFixed(2) + "$");
    $('#daily-result').html((currentValues.annual/100*$(this).val()/365).toFixed(2) + " " + current.symbol.toUpperCase());
    $('#daily-result-dol').html((currentValues.annual/100*$(this).val()*current.current_price/365).toFixed(2) + "$");
});

$('#delegated-amount').on('input', function () {
    if(parseInt($(this).val()) > 1000000)
      $(this).val('1000000');
    if(parseInt($(this).val()) < 0)
      $(this).val($(this).val()*-1);
    $('#ranger').val($(this).val());
    $('#holdings-value').html((current.current_price*$(this).val()).toFixed(2) + "$");
    $('#annual-result').html((currentValues.annual/100*$(this).val()).toFixed(2) + " " + current.symbol.toUpperCase());
    $('#annual-result-dol').html((currentValues.annual/100*$(this).val()*current.current_price).toFixed(2) + "$");
    $('#monthly-result').html((currentValues.annual/100*$(this).val()/12).toFixed(2) + " " + current.symbol.toUpperCase());
    $('#monthly-result-dol').html((currentValues.annual/100*$(this).val()*current.current_price.toFixed(2)/12).toFixed(2) + "$");
    $('#daily-result').html((currentValues.annual/100*$(this).val()/365).toFixed(2) + " " + current.symbol.toUpperCase());
    $('#daily-result-dol').html((currentValues.annual/100*$(this).val()*current.current_price/365).toFixed(2) + "$");
});


$('#copy-address').click(function(){
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($('#validator-address').text()).select();
  document.execCommand("copy");
  $temp.remove();
});

});
