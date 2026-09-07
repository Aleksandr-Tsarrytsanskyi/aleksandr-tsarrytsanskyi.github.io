import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function swiperPortfolio() {
    const swiperPrev = document.querySelector(".swiperPrev-shops");
    const swiperNext = document.querySelector(".swiperNext-shops");

    const swiperPrevLanding = document.querySelector(".swiperPrev-landing");
    const swiperNextLanding = document.querySelector(".swiperNext-landing");

        const swiperPrevCorporate = document.querySelector(".swiperPrev-corporate");
    const swiperNextLandingCorporate = document.querySelector(".swiperNext-corporate");
    const swiperShops = new Swiper('.swiper-shops', {
    // modules: [Navigation, Pagination, Autoplay],

    // slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },

        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

         375: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
});


    const swiperLandingPage = new Swiper('.swiper-landing', {
    // modules: [Navigation, Pagination, Autoplay],

    // slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },

        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

         375: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
})

    const swiperLandCorporate = new Swiper('.swiper-corporate', {
    // modules: [Navigation, Pagination, Autoplay],

    // slidesPerView: 3,
    spaceBetween: 20,

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },

        1200: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

         375: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    },
})

swiperPrevCorporate.addEventListener("click", () => {
      swiperLandCorporate.slidePrev();
        const svg = swiperPrevCorporate.querySelector('svg');

    svg.classList.remove('text-primary');
    svg.classList.add('text-violet-700');

    setTimeout(() => {
        svg.classList.remove('text-violet-700');
        svg.classList.add('text-primary');
    }, 1000);
    });

    swiperNextLandingCorporate.addEventListener("click", () => {
      swiperLandCorporate.slideNext();
       const svg = swiperNextLandingCorporate.querySelector('svg');

    svg.classList.remove('text-primary');
    svg.classList.add('text-violet-700');

    setTimeout(() => {
        svg.classList.remove('text-violet-700');
        svg.classList.add('text-primary');
    }, 1000);
    });


swiperPrevLanding.addEventListener("click", () => {
      swiperLandingPage.slidePrev();
        const svg = swiperPrevLanding.querySelector('svg');

    svg.classList.remove('text-primary');
    svg.classList.add('text-violet-700');

    setTimeout(() => {
        svg.classList.remove('text-violet-700');
        svg.classList.add('text-primary');
    }, 1000);
    });

    swiperNextLanding.addEventListener("click", () => {
      swiperLandingPage.slideNext();
       const svg = swiperNextLanding.querySelector('svg');

    svg.classList.remove('text-primary');
    svg.classList.add('text-violet-700');

    setTimeout(() => {
        svg.classList.remove('text-violet-700');
        svg.classList.add('text-primary');
    }, 1000);
    });


swiperPrev.addEventListener("click", () => {
      swiperShops.slidePrev();
        const svg = swiperPrev.querySelector('svg');

    svg.classList.remove('text-primary');
    svg.classList.add('text-violet-700');

    setTimeout(() => {
        svg.classList.remove('text-violet-700');
        svg.classList.add('text-primary');
    }, 1000);
    });

    swiperNext.addEventListener("click", () => {
      swiperShops.slideNext();
       const svg = swiperNext.querySelector('svg');

    svg.classList.remove('text-primary');
    svg.classList.add('text-violet-700');

    setTimeout(() => {
        svg.classList.remove('text-violet-700');
        svg.classList.add('text-primary');
    }, 1000);
    });
}


export function swiperMain() {
    const swiperPrevWork = document.querySelector(".swiperPrev-work");
    const swiperNextWork = document.querySelector(".swiperNext-work");


     const swiperPrevdevelopment = document.querySelector(".swiperPrev-development");
    const swiperNextdevelopment = document.querySelector(".swiperNext-development");

     const swiperPrevProcess = document.querySelector(".swiperPrev-procces");
    const swiperNextProcess = document.querySelector(".swiperNext-process");

       const swiperWork = new Swiper('.swiper-work', {
    modules: [Navigation, Pagination, Autoplay],

    // slidesPerView: 3,
    spaceBetween: 0,

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },

        1200: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 0,
        },

         375: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});


const swiperDevelopment = new Swiper('.swiper-development', {
    modules: [Navigation, Pagination, Autoplay],

    // slidesPerView: 3,
    spaceBetween: 0,

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },

        1200: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },

         375: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});

const swiperProcces = new Swiper('.swiper-process', {
    modules: [Navigation, Pagination, Autoplay],

    // slidesPerView: 3,
    spaceBetween: 0,

    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    

    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },

    breakpoints: {
        // 640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        // },

        1200: {
            slidesPerView: 7,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 0,
        },

         375: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },
});


swiperNextProcess.addEventListener("click", () => {
      swiperProcces.slideNext();

})


swiperPrevProcess.addEventListener("click", () => {
      swiperProcces.slidePrev();

})


swiperNextdevelopment.addEventListener("click", () => {
      swiperDevelopment.slideNext();

})


swiperPrevdevelopment.addEventListener("click", () => {
      swiperDevelopment.slidePrev();

})


swiperNextWork.addEventListener("click", () => {
      swiperWork.slideNext();

})


swiperPrevWork.addEventListener("click", () => {
      swiperWork.slidePrev();

})
}





