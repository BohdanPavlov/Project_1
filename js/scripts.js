$(document).ready(function () {
    $('.mobile-button').on('click', function () {
        $('.navigation').slideDown();
        $(this).toggleClass('opened');
    })
});