<template>
  <section id="phone">
    <h3 class="flex">
      <span class="floor-title">{{category.title}}</span>
      <a href="#" class="view-all">查看全部
        <i class="icon-gengduotianchong iconfont"></i>
      </a>
    </h3>
    <div class="flex floor-body">
      <a href="#" class="left" v-if="adImgSrcs.length === 1">
        <img :src="adImgSrcs[0]" alt="广告图">
      </a>
      <ul class="left left-two" v-if="adImgSrcs.length === 2">
        <a href=""><img :src="adImgSrcs[0]" alt="广告图片"></a>
        <a href=""><img :src="adImgSrcs[1]" alt="广告图片"></a>
      </ul>
      <ul class="right">
        <floor-product-item v-for="p of products" :key="p.id" :title="p.title" :subtitle="p.subtitle" :imgSrc="p.imgSrc" :priceOri="p.priceOri" :priceNow="p.priceNow" />
      </ul>
    </div>
  </section>
</template>

<script>
import api, { Pointer } from "../assets/js/api-client.js"
import FloorProductItem from "./floor-product-item"

export default {
  data() {
    return {
      products: []
    }
  },
  created() {
    const filter = {
      where: {
        category: new Pointer("ProductCategory", this.category.objectId)
      },
      limit: 8
    }
    api.get("/Product", filter).then(res => {
      this.products = res
    })
  },
  props: ["category", "adImgSrcs"],
  components: {
    FloorProductItem
  }
}
</script>
