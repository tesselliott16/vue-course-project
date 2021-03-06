import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  method: {
    changeAge: function(age){
      this.$emit('ageWasEdited', age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
