<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>User Name: {{userName}}</p>
        <p>User Age: {{userAge}}</p>
        <button @click="editAge" @nameWasReset="userName = $event">Edit Age</button>
    </div>
</template>

<script>
  import { eventBus } from '../main.js';
  export default{
    props: ['userAge' , 'userName'],
    methods: {
      editAge: function(){
        this.userAge=30;
        //this.$emit('ageWasEdited', this.userAge);
        eventBus.changeAge(this.userAge);
      }
    }

  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
