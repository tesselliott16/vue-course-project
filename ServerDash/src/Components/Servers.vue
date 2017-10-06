
<template>
  <div>
    <ul class="list-group">
        <li
              class="list-group-item"
              v-for="server in servers"
              :class="server.status">
              Server #{{server.id}} - Server Status - {{server.status}}
              <button @click="returnDetails(server)" :class="server.status">
              View Server Details</button>
        </li>
      </ul>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';
  export default {
    props: {
      servers: Array,
    },
    methods: {
      returnDetails: function(servers){
        eventBus.$emit('returnDetails', servers[servers.id]);
      }
    },
  }
  //todo: create server objects to print above, seperate component for each list item and pass the index (server number) to the server
  //array of server objects
  //pass the id of the server (from the object) to the list item and when you click the server, you can open the component for the server details and change the status with a button from the other component and have it match accross
</script>

<style scoped>
</style>
