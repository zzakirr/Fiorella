$(document).ready(function () {
    $('.home').mouseenter(function () {
        $('.homeMenu').slideDown('slow');
    })
    $('.home').mouseleave(function () {
        $('.homeMenu').fadeOut('slow');
    })
    $('.homeMenu').mouseenter(function () {
        $('.homeMenu').fadeIn('slow');
    })
    $('.homeMenu').mouseleave(function () {
        $('.homeMenu').fadeOut('slow');
    })
    $('.pages').mouseenter(function () {
        $('.pagesMenu').slideDown('slow');
    })
    $('.pages').mouseleave(function () {
        $('.pagesMenu').fadeOut('slow');
    })
    $('.pagesMenu').mouseenter(function () {
        $('.pagesMenu').fadeIn('slow');
    })
    $('.pagesMenu').mouseleave(function () {
        $('.pagesMenu').fadeOut('slow');
    })



});
// init Isotope
var $grid = $('.grid').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});