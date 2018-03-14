/*
** offset sert à dire à quel distance du haut de la page l'animation doit commencer
*/

var options = [{
  selector: '#about-me-triangle',
  offset: 200,
  callback: function(el) {
    Materialize.fadeInImage($(el));
  }
},
{
  selector: '#contact-me',
  offset: 200,
  callback: function(el) {
    Materialize.fadeInImage($(el));
  }
}];

Materialize.scrollFire(options);

$(window).ready(() => {

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 750);
    }
  });

})
