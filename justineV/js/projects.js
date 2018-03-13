$(function() {
  $('.img-w:not(.big-project):not(.little-project)').each(function() {
    $(this).wrap("<div class='img-c'></div>");
    let imgSrc = $(this).find('img').attr('src');
    $(this).css('background-image', 'url(' + imgSrc + ')');
  });

  $('.img-w.big-project').each(function() {
    $(this).wrap("<div class='img-c img-c-big'></div>");
    let imgSrc = $(this).find('img').attr('src');
    $(this).css('background-image', 'url(' + imgSrc + ')');
  });

  $('.img-w.little-project').each(function() {
    $(this).wrap("<div class='img-c img-c-little'></div>");
    let imgSrc = $(this).find('img').attr('src');
    $(this).css('background-image', 'url(' + imgSrc + ')');
  });
});

window.onload = function()
{
  document.querySelector("#gallery").style.opacity = 0; // Masquer le block dont l'ID est ID au chargement de la page, en Javascript pour l'accessibilité.
  setTimeout(function(){document.querySelector("#ID").style.opacity = 1;}, 5000); // Puis l'afficher au bout de cinq mille millisecondes - cinq secondes.
};
