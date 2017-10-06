<template>
  <div>
    <div>Details for Server :
    <br/>
      <ul>
        <li v-for="server in servers">
          <div style="text: center" v-show="show">{{server.id}} with current status {{server.status}}.
          </div>
          <button v-if="server.status = 'Danger'" @click="updateStatus(server.status)">Update Status</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main.js';
  export default{
    props: {
      servers: {
        type: Array,
      },
      serverNumber: Number,
    },
    data: function() {
      return{
        show: false,
      }
    },
    methods: {
      updateStatus: function(server,status){
        if(server.status === "Danger") {
          this.server.status == "Critical";
          alert("You have updated server" + this.server.id +" to the status" + this.server.status);
          eventBus.$emit('updatedServerStatus', this.serverNumber);
        }
      }
    },
    beforeUpdate: function() {
      if(this.serverNumber = this.server.id){
        this.show = true;
      }
    }
  }
</script>

<style>
</style>
