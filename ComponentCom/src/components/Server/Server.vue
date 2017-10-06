<template>
  <li
    class="list-group-item"
    style="cursor: pointer"
    @click="serverSelected"
    :class="server.status">
    Server #{{ server.id }}
</li>
</template>

<script>
  import { serverBus } from '../../main.js';

  export default {
    props:{
      server: Object,
    },
    methods: {
      serverSelected: function() {
        serverBus.$emit('serverSelected', this.server);

      }
    }
  }
</script>

<style scoped>
.Normal {
  background-color: green;
},
.Normal:hover {
  background-color: darkgreen;
},
.Critical {
  background-color: orange;
},
.Critical:hover {
  background-color: darkgoldenrod;
},
.Danger {
  background-color: red;
}
.Danger:hover {
  background-color: firebrick;
}
</style>
