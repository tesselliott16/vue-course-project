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
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
