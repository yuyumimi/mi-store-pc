<template>
  <ul id="site-category" class="flex">
  </ul>
</template>

<script>
import api from '../assets/js/api-client.js'
export default {
  mounted() {
    const nav = {
      $elem: null,
      data: null,
      init() {
        const now = Date.now()
        this.$elem = $("#site-category")

        api.get('/IndexSideCategory')
          .then(res => {
            this.data = res
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

