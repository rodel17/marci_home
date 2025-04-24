$(function() {
  console.log('Script ready');

  $('.open-menu').click(function() {
    $('.open-menu i').toggle();
    $('.menu-list-container').fadeToggle();
    // $('.open-menu i.fa-xmark').fadeToggle();
  })
})