import Vue from 'vue';
import "../sass/style.sass";

import App from '../vue/App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');

console.log('test');