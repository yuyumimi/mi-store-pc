<template>
  <a href="#" class="banner">
    <img :src="imgUrl" alt="广告">
  </a>
</template>

<script>
export default {
  props: ["imgUrl"]
}
</script>

<style>
.banner > img {
  width: 100%;
  margin: 40px auto;
}
</style>
