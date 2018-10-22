$(document).ready(function(){

  $('img').fadeOut(3000);

  $('#btn').click(function(){
    $(this).fadeOut(1000)
  })

  //Sanfona
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });

  //Menu Lateral
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });


  // Pushpin
  $('.pushpin-demo-nav').each(function() {
    var $this = $(this);
    var $target = $('#' + $(this).attr('data-target'));
    $this.pushpin({
      top: $target.offset().top,
      bottom: $target.offset().top + $target.outerHeight() - $this.height()
    });
  });

  // Tost
  M.toast({html: 'I am a toast!'})


  // Or with jQuery
  $('.tap-target').tapTarget();
})

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tap-target');
  var instances = M.TapTarget.init(elems, options);
});