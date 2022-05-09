    document.addEventListener("DOMContentLoaded", e => {
      const body = document.querySelector('body')
      const burger = document.querySelector('.header__burger')  
      const menu = document.querySelector('.header__menu') 
      const orderLinks = document.querySelectorAll('.products__order-link')
      const orderPopup = document.querySelector('.products__popup')
      const orderClose = document.querySelector('.products__popup-close')
      const vacanciesLinks = document.querySelectorAll('.vacancies__button a')
      const vacanciesPopup = document.querySelector('.vacancies__popup')
      const vacanciesCloses = document.querySelectorAll('.vacancies__popup-close')

      burger.addEventListener('click', e => {
          burger.classList.toggle('open')
          menu.classList.toggle('open')
      })
      
      const swiper = new Swiper('.swiper', {
          navigation: {
              nextEl: '.swiperArrowNext',
              prevEl: '.swiperArrowPrev',
            },  
            pagination: {
              el: '.swiperPagination',
            },
            breakpoints: {
      
              320: {
                  slidesPerView: 1,
              },
      
              901: {
                  slidesPerView: 2,
                  spaceBetween: 0,
              },
      
              1226: {
                  spaceBetween: 30,
                  slidesPerView: 3,
              },
              1551: {
                  slidesPerView: 4,
              }
            }
            
      })
      if(document.getElementById('phone-mask')) {
        var phoneMask = IMask(
          document.getElementById('phone-mask'), {
            mask: '+{7} (000) 000-00-00',
          });
      }
      if(document.getElementById('phone-mask2')) {
        var phoneMask2 = IMask(
          document.getElementById('phone-mask2'), {
            mask: '+{7} (000) 000-00-00',
          });
      }
      orderLinks.forEach(element => {
        element.addEventListener('click', e => {
          e.preventDefault()
          orderPopup.classList.add('open')
          body.classList.add('lock')
          window.addEventListener('click', e => {
            if(e.target == orderPopup || e.target == orderClose) {
              orderPopup.classList.remove('open')
              body.classList.remove('lock')
            }
          })
        })
      })
      vacanciesLinks.forEach(element => {
        element.addEventListener('click', e => {
          e.preventDefault()
          vacanciesPopup.classList.add('open')
          body.classList.add('lock')
          const namePopupContent = '.' + element.dataset.popupcontent
          const popupContent = document.querySelector(namePopupContent)
          popupContent.classList.add('open')
          window.addEventListener('click', e => {
            if(e.target == vacanciesPopup) {
              vacanciesPopup.classList.remove('open')
              popupContent.classList.remove('open')
              body.classList.remove('lock')
            }
          })
          vacanciesCloses.forEach(element => {
            element.addEventListener('click', e => {
              vacanciesPopup.classList.remove('open')
              popupContent.classList.remove('open')
              body.classList.remove('lock')
            }) 
          })
        })
      })

      const animItems = document.querySelectorAll('.anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (animItem.classList.contains('remove-animate'))
                    animItem.classList.remove('active');
            }

        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }

    }
    setTimeout(() => {
        animOnScroll();
    }, 200);
}
    });

    