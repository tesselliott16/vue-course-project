<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName()}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="resetNameFxn()">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main.js';
  export default{
    props: {
      userName: {
        type: String,
      },
      resetNameFxn: Function,
      userAge: Number,
    },
    methods: {
      switchName: function() {
        return this.userName.split("").reverse().join("");
      },
      resetName: function() {
        this.userName = 'Tess';
        this.$emit('nameWasReset', this.userName);
      }
    },
    created: function() {
      eventBus.$on('ageWasEdited', (age) => {
        this.userAge = age;
      });
    }
  }
</script>

<style scoped>
    div {
        background-color: cyan;
    }
</style>
