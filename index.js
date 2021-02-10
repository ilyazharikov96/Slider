const slides = document.querySelectorAll('.slider__item'),
      dots = document.querySelectorAll('.slider__dot'),
      prevBtn = document.querySelector('.slider__prev'),
      nextBtn = document.querySelector('.slider__next');

let showSlide = 0;

slides[0].classList.add('active');
dots[0].classList.add('active');

nextBtn.addEventListener('click', () => {

    removeActiveItem()

    showSlide < (slides.length - 1) ? showSlide++ : showSlide = 0

    slides[showSlide].classList.add('active')
    dots[showSlide].classList.add('active')
})

prevBtn.addEventListener('click', () => {

    removeActiveItem()

    showSlide > 0 ? showSlide-- : showSlide = slides.length - 1

    slides[showSlide].classList.add('active')
    dots[showSlide].classList.add('active')
})


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {

        removeActiveItem()

        dot.classList.add('active')

        slides[index].classList.add('active')
    })
    
})

function removeActiveItem() {
    slides.forEach(slide => {

        slide.classList.remove('active')
    })

    dots.forEach(dot => {
        
        dot.classList.remove('active')
    })
}
