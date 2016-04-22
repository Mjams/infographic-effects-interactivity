var $gasJug = $('#jug');
var $txt = $('.txt');

$('.gas-jug').on('mouseover', function () {
  $gasJug.addClass('jug-turn');
});

$('.gas-jug').on('mouseout', function () {
  $gasJug.removeClass('jug-turn');
});

$txt.waypoint(function (direction) {
  if (direction == 'down') {
    $txt.addClass('js-txt-animate');
  } else {
    $txt.removeClass('js-txt-animate');
  }
}, {offset: '70%'});
