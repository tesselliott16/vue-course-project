import Vue from 'vue'
import App from './App.vue'
import ServerDash from './Components/ServerDash.vue'
import ServerHeader from './Components/ServerDashHeader.vue'
import ServerFooter from './Components/ServerDashFooter.vue'

export const eventBus = new Vue({});

Vue.component('server-dash', ServerDash);
Vue.component('server-footer', ServerFooter);
Vue.component('server-header', ServerHeader);

new Vue({
  el: '#app',
  render: h => h(App)
})
