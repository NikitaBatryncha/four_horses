(function () {
  document.addEventListener("DOMContentLoaded", function () {
    //реализация smooth scroll на странице с библиотекой Lenis
    const lenis = new Lenis()

    lenis.on('scroll', () => {

    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  });

  //карточки для слайдера Members
  const players = [
    {
      name: "Хозе-Рауль Капабланка",
      title: "Чемпион мира по шахматам",
      img: "public/img/icon_placeholder.webp",

    },
    {
      name: "Эммануил Ласкер",
      title: "Чемпион мира по шахматам",
      img: "public/img/icon_placeholder.webp",
    },
    {
      name: "Александр Алехин",
      title: "Чемпион мира по шахматам",
      img: "public/img/icon_placeholder.webp",

    },
    {
      name: "Арон Нимцович",
      title: "Чемпион мира по шахматам",
      img: "public/img/icon_placeholder.webp",
    },
    {
      name: "Рихард Рети",
      title: "Чемпион мира по шахматам",
      img: "public/img/icon_placeholder.webp",

    },
    {
      name: "Остап Бендер",
      title: "Гроссмейстер",
      img: "public/img/icon_placeholder.webp",
    },
  ];

  //создание и добавление карточек в слайдер
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  const createSwiperCard = (img, name, title) => {
    const newSlide = document.createElement('div');
    newSlide.classList.add('swiper-slide', 'slide');

    // Создаем img элемент для иконки
    const newSlideIcon = document.createElement('img');
    newSlideIcon.classList.add('slide__icon');
    newSlideIcon.src = img;

    // Создаем элемент h4 для имени игрока
    const newSlideName = document.createElement('h4');
    newSlideName.classList.add('slide__name');
    newSlideName.textContent = name;

    // Создаем элемент p для титула игрока
    const newSlideTitle = document.createElement('p');
    newSlideTitle.classList.add('slide__title');
    newSlideTitle.textContent = title;

    // Создаем кнопку
    const newSlideButton = document.createElement('button');
    newSlideButton.classList.add('slide__button');
    newSlideButton.textContent = "Подробнее";

    // Добавляем все созданные элементы в слайд
    newSlide.appendChild(newSlideIcon);
    newSlide.appendChild(newSlideName);
    newSlide.appendChild(newSlideTitle);
    newSlide.appendChild(newSlideButton);

    // Добавляем новый слайд в слайдер
    swiperWrapper.appendChild(newSlide);
  }

  if (swiperWrapper) {
    for (let player of players) {
      createSwiperCard(player.img, player.name, player.title)
    }
  }

  //инициализация слайдера Members
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.members-swiper-pagination',
      type: "fraction",
    },
    navigation: {
      nextEl: '.members-swiper-button-next',
      prevEl: '.members-swiper-button-prev',
    },
    breakpoints: {

      320: {
        slidesPerView: 1,
      },

      521: {
        slidesPerView: 2,
      },
      720: {
        slidesPerView: 3,
      }
    }
  });

  if (window.screen.width <= 780) {
    //изменяю положение с классом .about__image--1
    const aboutTitle = document.querySelector(".about__title--1");
    const aboutImg = document.querySelector(".about__image--1");
    aboutTitle.appendChild(aboutImg);
  }

  //работа с DOM при разрещениях ниже 520px
  if (window.screen.width <= 520) {
    //меняю путь к изображению
    const aboutImg2 = document.querySelector(".about__image--2");
    aboutImg2.src = ("public/img/chess_money_small.webp");

    //превращаю таблицу в слайдер
    const steps = document.querySelector(".grid");
    steps.classList = "grid stepsSwiper";

    const stepsWrapper = document.createElement("div");
    stepsWrapper.classList = "swiper-wrapper";

    const stepsPaginationWrapper = document.createElement("div");
    stepsPaginationWrapper.classList = "steps-paginationWrapper";

    const stepsButtonPrev = document.createElement("div");
    stepsButtonPrev.classList = "steps-swiper-button-prev";

    const stepsButtonNext = document.createElement("div");
    stepsButtonNext.classList = "steps-swiper-button-next";

    const stepsPagination = document.createElement("div");
    stepsPagination.classList = "steps-swiper-pagination";

    const stepsSlide1 = document.querySelector(".grid__item--1");
    const stepsSlide2 = document.querySelector(".grid__item--2");
    const stepsSlide3 = document.querySelector(".grid__item--3");
    const stepsSlide4 = document.querySelector(".grid__item--4");
    const stepsSlide5 = document.querySelector(".grid__item--5");
    const stepsSlide6 = document.querySelector(".grid__item--6");
    const stepsSlide7 = document.querySelector(".grid__item--7");

    let i = 0;

    do {
      const sliderSlide = document.createElement("div");
      sliderSlide.classList = `swiper-slide steps-slide swiper-slide--${i}`;
      stepsWrapper.append(sliderSlide)

      i++
    } while (i !== 5)


    steps.appendChild(stepsWrapper);

    stepsPaginationWrapper.appendChild(stepsButtonPrev);
    stepsPaginationWrapper.appendChild(stepsPagination);
    stepsPaginationWrapper.appendChild(stepsButtonNext);

    steps.appendChild(stepsPaginationWrapper);

    const swiperSlide0 = document.querySelector(".swiper-slide--0");
    swiperSlide0.appendChild(stepsSlide1);
    swiperSlide0.appendChild(stepsSlide2);

    const swiperSlide1 = document.querySelector(".swiper-slide--1");
    swiperSlide1.appendChild(stepsSlide3);

    const swiperSlide2 = document.querySelector(".swiper-slide--2");
    swiperSlide2.appendChild(stepsSlide4);
    swiperSlide2.appendChild(stepsSlide5);

    const swiperSlide3 = document.querySelector(".swiper-slide--3");
    swiperSlide3.appendChild(stepsSlide6);

    const swiperSlide4 = document.querySelector(".swiper-slide--4");
    swiperSlide4.appendChild(stepsSlide7);

    const stepsSwiper = new Swiper('.stepsSwiper', {
      spaceBetween: 20,
      pagination: {
        el: '.steps-swiper-pagination',
      },
      navigation: {
        nextEl: '.steps-swiper-button-next',
        prevEl: '.steps-swiper-button-prev',
      },
    })
  }

  if (window.screen.width > 520) {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        scrub: true,
        start: "bottom 40%",
        end: "+=500px",
      },
    });

    timeline.to(".hero", {
      opacity: 0.5,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(".bg-image--city", {
      top: 260,
      opacity: 1,
      duration: 1.5,
      ease: "power1.inOut",
      immediateRender: true,
    });

    gsap.to(".bg-image--circle", {
      top: -105,
      opacity: 1,
      duration: 1.3,
      ease: "power1.inOut",
      immediateRender: true,
    });

    gsap.to(".bg-image--queen", {
      top: 165,
      opacity: 1,
      duration: 1.5,
      ease: "expo.inOut",
      delay: .7
    });

    gsap.to(".bg-image--king", {
      top: 270,
      opacity: 1,
      duration: 1.1,
      ease: "expo.in",
      delay: .7
    });

    gsap.to(".bg-image--horse", {
      bottom: -2,
      opacity: 1,
      duration: 1.1,
      ease: "expo.in",
      delay: 1
    });

    gsap.to(".bg-image--front", {
      bottom: 19,
      opacity: 1,
      duration: 1.1,
      ease: "expo.in",
      delay: 1.2
    });
  }

  if (window.screen.width > 1200) {
    const timeline1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        scrub: true,
        start: "top +=500px",
        end: "+=200px",
      },
    });

    const timeline2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".steps",
        scrub: true,
        start: "top +=1000px",
        end: "+=200px",
      },
    });

    const timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".members",
        scrub: true,
        start: "top +=1000px",
        end: "+=200px",
      },
    });

    timeline1.fromTo(".about__wrapper--2", {
      scale: 0.9,
      opacity: 0,
    },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "expo.in",
      });

    timeline2.fromTo(".steps__container", {
      scale: .9,
      opacity: 0,
    },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "expo.in",
      });

    timeline3.fromTo(".members__container", {
      scale: .9,
      opacity: 0,
    },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "expo.in",
      });
  }
})();
