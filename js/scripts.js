$(document).ready(function () {
    $('.mobile-button').on('click', function () {
        $('.navigation').slideDown();
        $(this).toggleClass('opened');
    });

    $(function () {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
});