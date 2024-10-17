// window scroll
$(window).on("scroll", function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop >= 80) {
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header');
    }
});

//   Document Ready
$(document).ready(function() {
    // Typing animation
    new Typed('#type-it', {
        strings: ['소통으로 사용자 중심 웹을 만드는', '사용자의 목소리를 코드로 실현하는', '사용자 편의를 최우선으로 설계하는'],
        typeSpeed: 100,
        loop: true
      });
});