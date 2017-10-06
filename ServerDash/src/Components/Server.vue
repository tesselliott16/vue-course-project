
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
  export default {
    data: function() {
      return
    }
  }
</script>

<style scoped>
  .Normal {
    background-color: green;
  },
  .Critical {
    background-color: orange;
  },
  .Danger {
    background-color: red;
  }

</style>
