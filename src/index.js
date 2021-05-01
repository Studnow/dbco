import './styles/main.sass'
import Vue from 'vue';

window.Vue = require('vue')

Vue.component('example-component', require('./components/Example.vue').default)
Vue.component("aside-component", require("./components/aside.vue").default);

const app = new Vue({
  el: '#app'
})
