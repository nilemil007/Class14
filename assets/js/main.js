jQuery(document).ready(function(){

  // Counter
  jQuery('.count').counterUp({
      delay: 10,
      time: 1000
  });

  // rProgressbar
  jQuery('.jqueryscript').rProgressbar({
    percentage: 92,
    fillBackgroundColor: '#ffffff',
    backgroundColor: '#4dcdb4',
    height: '5px',
  });
  jQuery('.illustrator').rProgressbar({
    percentage: 85,
    fillBackgroundColor: '#ffffff',
    backgroundColor: '#4dcdb4',
    height: '5px',
  });
  jQuery('.afterEffect').rProgressbar({
    percentage: 97,
    fillBackgroundColor: '#ffffff',
    backgroundColor: '#4dcdb4',
    height: '5px',
  });
  jQuery('.html').rProgressbar({
    percentage: 90,
    fillBackgroundColor: '#ffffff',
    backgroundColor: '#4dcdb4',
    height: '5px',
  });
  jQuery('.css').rProgressbar({
    percentage: 85,
    fillBackgroundColor: '#ffffff',
    backgroundColor: '#4dcdb4',
    height: '5px',
  });
  jQuery('.javascript').rProgressbar({
    percentage: 72,
    fillBackgroundColor: '#ffffff',
    backgroundColor: '#4dcdb4',
    height: '5px',
  });

  // Mixitup Initial
  var mixer = mixitup('.project-items');

  // Mixitup button active
  jQuery('.project-menu li').click(function(){
    jQuery('.project-menu li').removeClass('pMenuActive');
    jQuery(this).addClass('pMenuActive');
  });

}); //Ending
