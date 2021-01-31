// MELANIA GOTTARDO - Galleria

function resizeImage(index){
  function loadImage(width, height){
    var maxWidth = 900;
    var maxHeight = 500;
    var ratio = 1;

    if(width > maxWidth){
      ratio = maxWidth / width;
      image.css("width", maxWidth);
      image.css("height", height * ratio);
      height *= ratio;
      width = maxWidth;
    }

    if(height > maxHeight){
      ratio = maxHeight / height;
      image.css("height", maxHeight);
      image.css("width", width * ratio);
      width = width * ratio;
    }
  }

  var image = $('#gallery img').eq(index)
  image.on('load', function() {
    var width  = this.width;
    var height = this.height;
    loadImage(width, height);
  });
}

$(document).ready(function() {

  // PREPARATION & ADDING ELEMENTS
  $('img').wrapAll('<div id="gallery"/>');
  $('#gallery img').eq(0).attr('src', "https://avante.biz/wp-content/uploads/Fantasy-Wallpapers-HD/Fantasy-Wallpapers-HD-001.jpg");
  $('#gallery img').eq(1).attr('src', "https://c.wallhere.com/photos/e3/83/fantasy_art_dragon_castle_bird's_eye_view-257133.jpg!d");
  $('#gallery img').eq(2).attr('src', "https://cdn.wallpapersafari.com/68/49/IMaKX7.jpg");
  $('#gallery img').eq(3).attr('src', "https://vignette.wikia.nocookie.net/iron-throne-roleplay5113/images/6/67/SS1.jpg/revision/latest?cb=20170430153028");
  $('button').wrapAll('<div id="press"/>');
  $('body').prepend('<h1>Fantasy art gallery</h1>');
  $('#prevbutton').prepend('<span/>');
  $('#nextbutton').append('<span/>');

  // RESIZING & HIDE IMAGES
  var images = $('#gallery, img');
  var position = 0;
  var image;
  resizeImage(0);
  resizeImage(1);
  resizeImage(2);
  resizeImage(3);
  image = $('#gallery img:first');
  $('#gallery :not(#gallery img:first)').hide();

  // PREV BUTTON
  $('#prevbutton').click(function(){
    image.animate({
      width: "hide",
      height: "hide",
      opacity: 0
    },'slow');
    if(position <= 0){
      position = images.length-2;
      image = $('#gallery img:last');
    }
    else {
      position -= 1;
      image = image.prev('img');
    }
    image.delay(200).animate({
      width: "show",
      height: "show",
      opacity: 1
    },'slow');
  });

  // NEXT BUTTON
  $('#nextbutton').click(function(){
    image.animate({
      width: "hide",
      height: "hide",
      opacity: 0
    },'slow');
    if(position == images.length-2){
      position = 0;
      image = $('#gallery img:first');
    }
    else {
      position += 1;
      image = image.next('img');
    }
    image.delay(200).animate({
      width: "show",
      height: "show",
      opacity: 1
    },'slow');
  });
});
