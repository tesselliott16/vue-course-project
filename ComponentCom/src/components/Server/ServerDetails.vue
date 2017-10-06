<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="!server">Please select a server!</div>
        <div v-else>
          <p :class ="server.status">Server #{{server.id}} selected, status: {{server.status}}</p>
          <button v-if="server.status != 'Normal'"@click="resetStatus"> Change to Normal </button>
        </div>

    </div>

</template>

<script>
import { serverBus } from '../../main.js';

export default{
  data: function() {
    return{
      server: null,
    }
  },
  created: function(){
    serverBus.$on('serverSelected', (server) =>
    this.server = server,
  )},
  methods: {
    resetStatus: function() {
      this.server.status = 'Normal';
    }
  }

}
</script>

<style scoped>
.Normal {
  margin-top: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid green;
  box-shadow: 0px 3px 6px #ccc;
},
.Critical {
  margin-top: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid orange;
  box-shadow: 0px 3px 6px #ccc;
},
.Danger {
  margin-top: 30px;
  text-align: center;
  padding: 10px;
  border: 1px solid red;
  box-shadow: 0px 3px 6px #ccc;
}
</style>
