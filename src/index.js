import './styles/main.sass';
import Vue from 'vue';
import Swiper from 'swiper'
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

// swiper не работает если смонтирован экземпляр Vue, либо отключаем Vue, либо слайдер из Vue компонентов

const slider = new Swiper(".swiper-container", {
  slidesPerView: 3,
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});

window.Vue = require('vue')

// Vue.component('example-component', require('./components/Example.vue').default)
// Vue.component("aside-component", require("./components/aside.vue").default);

// const app = new Vue({
//   el: '#app'
// })
