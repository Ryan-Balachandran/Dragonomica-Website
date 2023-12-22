// Improved by: http;//coursesweb.net/
$(function () {
  var $document = $(document),
    $window = $(window),
    $body = $('body');
    var placeFotorama = function ($fotorama, time) {
    if ($fotorama.data('open')) {
      $fotorama.stop().css({marginTop: -30, left: $body.width() / 2 - $fotorama.width() / 2, top: $window.scrollTop() + $window.height() / 2 - $fotorama.height() / 2 - 20}).animate({marginTop: 0, opacity: 1}, time || 0);
    } else {
      $fotorama.css({left: -99999, top: -99999});
    }
  };

  // take all .fotorama blocks
  $('.thumbs').each(function () {
    var $thumbs = $(this),

      // clone it and make fotorama
      $fotorama = $('.fotorama', $thumbs).clone().addClass('fotorama-lightbox').appendTo('body').fadeTo(0, 0).fotorama(),fotorama = $fotorama.data('fotorama');

    placeFotorama($fotorama);

    for (var _i = 0, _l = fotorama.data.length; _i < _l; _i++) {
      // prepare id to use in fotorama.show()
      fotorama.data[_i].id = fotorama.data[_i].img;
    }

    // bind clicks
    $fotorama.on('click', function (e) {
      e.stopPropagation();
    });

    $thumbs.on('click', 'img', function (e) {
      e.preventDefault();
      e.stopPropagation();

      var $this = $(this), _$fotorama = $body.data('$fotorama');

      // show clicked frame
      fotorama.show({index: $(this).attr('src'), time: _$fotorama ? 300 : 0, slow: e.altKey});

      if(_$fotorama) return;

      $body.addClass('overflow-hidden').data('$fotorama', $fotorama);
      $fotorama.css({left: $this.offset().left, top: $this.offset().top});
      placeFotorama($fotorama.data('open', true), 300);
    });

    $window.on('resize', function () {
      placeFotorama($fotorama);
    });

    var closeFotorama = function () {
      var $fotorama = $body.data('$fotorama');

      if (!$fotorama) return;
      $body.removeClass('overflow-hidden').data('$fotorama', null);
      $fotorama.stop().animate({marginTop: 30, opacity: 0}, 300, function () {
        placeFotorama($fotorama.data('open', false));
      });
    };

    $document.on('click', closeFotorama).on('keydown', function (e) {
      var $fotorama = $body.data('$fotorama');

      if (!$fotorama) return;

      var fotorama = $fotorama.data('fotorama');

      if (e.keyCode === 27) {
        e.preventDefault();
        closeFotorama();
      } else if (e.keyCode === 39) {
        fotorama.show({index: '>', slow: e.altKey, direct: true});
      } else if (e.keyCode === 37) {
        e.preventDefault();
        fotorama.show({index: '<', slow: e.altKey, direct: true});
      }
    });

    $fotorama.on('fotorama:fullscreenenter', function (e, fotorama) {
    fotorama.cancelFullScreen();
    closeFotorama();
    });
  });
});