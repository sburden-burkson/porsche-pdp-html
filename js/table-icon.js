$.fn.textWidth = function(){
  var html_org = $(this).html();
  var html_calc = '<span>' + html_org + '</span>';
  $(this).html(html_calc);
  var width = $(this).find('span:first').width();
  $(this).html(html_org);
  return width;
};

$('table').on( 'draw.dt', function (e) {
  $('table thead tr th').each(function(idx, ele) {
    var xPos = parseInt($(ele).textWidth()) + 15;
    $(ele).css('background-position-x',  xPos + 'px');
  });
});
