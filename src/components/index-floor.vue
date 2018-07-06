<template>
  <section id="phone">
    <h3 class="flex">
      <span class="floor-title">{{category.title}}</span>
      <a href="#" class="view-all">查看全部
        <i class="icon-gengduotianchong iconfont"></i>
      </a>
    </h3>
    <div class="flex floor-body">
      <a href="#" class="left">
        <img src="../assets/img/xmad_15242078029661_OTptI.jpg" alt="广告图">
      </a>
      <ul class="right">
        <floor-product-item v-for="p of products" :key="p.id" :title="p.title" :subtitle="p.subtitle" :imgSrc="p.imgSrc" :priceOri="p.priceOri" :priceNow="p.priceNow" />
      </ul>
    </div>
  </section>
</template>

<script>
import api from "../assets/js/api-client.js"
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
        categoryId: this.category.id
      },
      limit:8
    }
    api.get("/product", filter).then(res => {
      this.products = res.data
    })
  },
  props: ["category", "ads"],
  components: {
    FloorProductItem
  }
}
</script>
