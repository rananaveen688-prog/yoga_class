$(document).ready(function () {
    $('.hamburger').click(function () {
        $('.header_navbar ul').slideToggle('400');
        $(this).toggleClass('open');
    });
    $('.header_navbar ul li').on('click', function () {
        $('.header_navbar ul').slideUp('300');
        $('.hamburger').removeClass('open');
    });

     $('li.clickclass').on('click', function (e) {
        e.preventDefault();
        $('.message ul').slideToggle(500);
    });
});
