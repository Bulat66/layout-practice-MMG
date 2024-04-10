const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      slides[currentSlide].classList.add('inactive');

      console.log(currentSlide);

      currentSlide = (currentSlide + 1) % slides.length;

      slides[currentSlide].classList.remove('inactive');
      slides[currentSlide].classList.add('active');
    }, 5000);

