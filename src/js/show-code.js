import $ from 'jquery';

$(function() {

  $('#show-code').click(function() {
    if ($('#code').hasClass('close')) {
      $('#code').removeClass('close');
      $('#show-code').html('Close code');
    } else {
      $('#code').addClass('close');
      $('#show-code').html('Open code');
    }
  });
  
  $('#show-code-num').click(function() {
    if ($('#code-num').hasClass('close')) {
      $('#code-num').removeClass('close');
      $('#show-code-num').html('Close code');
    } else {
      $('#code-num').addClass('close');
      $('#show-code-num').html('Open code');
    }
  });
});