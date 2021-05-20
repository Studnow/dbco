import "./styles/main.sass";
// import { createApp } from "vue";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

// swiper не работает если смонтирован экземпляр Vue, либо отключаем Vue, либо слайдер из Vue компонентов

const slider = new Swiper(".swiper-container", {
  slidesPerView: 3,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

// import Aside from './components/aside.vue'
// import Example from './components/Example.vue'
// createApp(Aside).mount('#something')
// createApp(Example).mount("#example");