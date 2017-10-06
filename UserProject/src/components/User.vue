<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User named {{name}} at age {{age}}!</p>
        <button @click="changeName">Change My Name!</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                :userName="name"
                @nameWasReset="name = $event"
                :resetNameFxn="resetName"
                :userAge="age"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userName="name" :userAge="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    import { eventBus } from '../main.js';

    export default {
      data: function() {
        return {
          name: 'Tess',
          age: 23,
        };
      },
      methods: {
        changeName: function() {
          this.name = 'Jesse';
          alert('User name has been updated!');
        },
        resetName: function() {
          this.name = 'Tess';
        }
      },
      created: function() {
        eventBus.$on('ageWasEdited', (age) => {
          this.userAge = age;
        });
      },
      components: {
          appUserDetail: UserDetail,
          appUserEdit: UserEdit
      }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
