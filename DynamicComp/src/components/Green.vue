<template>
  <div>
    <div>
      <slot name = "title"></slot>
    </div>
    <div>
      <slot name = "paragraph"></slot>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid green;
        background-color: lightgreen;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
