<template>
  <ul id="site-category" class="flex">
  </ul>
</template>

<script>
import SHA1 from "../assets/js/sha1.js"
import axios from "axios"
import { apiCloud } from "../app.config"

export default {
  mounted() {
    const nav = {
      $elem: null,
      data: null,
      init() {
        const now = Date.now()
        this.$elem = $("#site-category")

        axios
          .get(apiCloud.baseURL + "/indexSideCategory", {
            headers: {
              "X-APICloud-AppId": apiCloud.appId,
              "X-APICloud-AppKey":
                SHA1(apiCloud.appId + "UZ" + apiCloud.appKey + "UZ" + now) +
                "." +
                now
            }
          })
          .then(res => {
            this.data = res.data
            this.load()
          })
          .catch(err => {
            console.error(err)
          })
      },
      load() {
        const $nav1s = []
        for (const nav1 of this.data) {
          const $nav1 = $('<li class="flex">')
            .html(`<span>${nav1.title}</span>`)
            .append('<i class="icon-youjiantou1 iconfont"></i>')
          $nav1s.push($nav1)
        }
        this.$elem.append($nav1s)
      }
    }

    nav.init()
  }
}
</script>

