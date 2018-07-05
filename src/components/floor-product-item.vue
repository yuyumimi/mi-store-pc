<template>
  <li class="floor-cell">
    <img class="img" :src="imgSrc" alt="手机图片">
    <a href="#">
      <h5 class="title">{{title}}</h5>
    </a>
    <p class="desc">{{subtitle}}</p>
    <p class="price">
      <span>{{priceNow}}</span>
    </p>
  </li>
</template>

<script>
export default {
  props: ["title", "subtitle", "priceNow", "priceOri", "imgSrc"]
}
</script>
