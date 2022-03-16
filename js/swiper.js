const swiper = new Swiper('.swiper', {
    // 옵션설정
    direction: 'horizontal', //슬라이더 방향
    effect: 'fade',
    loop: true,
    autoplay: {
        delay: 3000
    },
    speed: 2000, //전환효과 시간
  
    // 하단 버튼 ui
    pagination: {
      el: '.swiper-pagination',
    },
  
    // 화살표
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });