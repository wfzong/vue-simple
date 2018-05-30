import Vue from 'vue';
import './style.css';
import ELE from './ELE.vue';
const app = new Vue({
  el: '#app',
  components: { ELE },
  render: h => {
    return h(ELE);
  }
});
