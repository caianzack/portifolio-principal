let header = document.getElementById('cabecalho')

addEventListener('scroll', () => {
    if(scrollY >= 200){
        header.style.background = '#191919'
    }else{
        header.style.background = 'transparent'
    }
})

let swiper = createSwiper(".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev");

function createSwiper(container, pagination, nextButton, prevButton) {
    return new Swiper(container, {
      slidesPerView: handleWidth(),
      spaceBetween: 30,
      pagination: {
        el: pagination,
        clickable: true,
      },
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
    });
  }
  
  function handleWidth() {
    let getWidth = window.innerWidth || document.documentElement.clientWidth;
    let slideShow = 3;
  
    if (getWidth < 1001) {
      slideShow = 2;
    }
  
    if (getWidth < 700) {
      slideShow = 1;
    }
  
    return slideShow
  }