<template>
  <div class="row">
      <div class="col-xs-12 col-sm-6">
          <servers :servers="servers"></servers>
      </div>
      <div class="col-xs-12 col-sm-6">
          <server-details :server="server"></server-details>
      </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';
  import Servers from '../Components/Servers.vue';
  import ServerDetails from '../Components/ServerDetails.vue';

  export default {
    data: function() {
      return{
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Normal'},
          {id: 4, status: 'Danger'},
          {id: 5, status: 'Normal'},
        ],
      }
    },
    components: {
      'servers': Servers,
      'server-details': ServerDetails,
    },
    created: function() {
      eventBus.$on('returnDetails', (server) => {
        this.server.id = server.id;
      });
    }
  }
</script>

<style>
</style>
