<template>
  <div class="carousel">
    <div class="imgs">
    </div>
    <div class="controls">
      <a href="#">
        <i class="icon-fanhui left-arrow iconfont"></i>
      </a>
      <a href="#">
        <i class="icon-gengduo right-arrow iconfont"></i>
      </a>
      <ul class="indicators flex">
      </ul>
    </div>
  </div>
</template>

<script>
import "../assets/js/jquery-3.3.1.min"
import api from "../assets/js/api-client.js"

export default {
  mounted() {
    // 轮播图
    const carousel = {
      currentIndex: 0,
      $elem: $("div.carousel"),
      $imgContainer: $("div.carousel>.imgs"),
      interval: null,
      data: null,
      init() {
        api
          .get("/carouselItem")
          .then(res => {
            this.data = res.data
            this.data.push(this.data[0])
            this.load()
          })
          .catch(err => {
            console.error(err)
          })

        this.startInterval()
        this._bindEvents()
      },
      _bindEvents() {
        const $elem = this.$elem

        // 鼠标悬停时停止播放
        $elem.hover(
          () => {
            clearInterval(this.interval)
            this.interval = null
          },
          () => {
            this.startInterval()
          }
        )

        // 点击箭头切换轮播图
        $elem.find(".right-arrow").click(() => {
          this.moveToNext()
        })
        $elem.find(".left-arrow").click(() => {
          this.moveToPrev()
        })
      },
      _getNextIndex() {
        let i = this.currentIndex
        i++
        if (i > this.data.length - 1) {
          i = 0
        }

        return i
      },
      _getPreviousIndex() {
        let i = this.currentIndex
        i--
        if (i < 0) {
          i = this.data.length - 1
        }

        return i
      },
      load() {
        const carousels = this.data

        // generate imgs
        const $carouselImgContainer = this.$imgContainer

        const $indicators = []
        for (const carousel of carousels) {
          $carouselImgContainer.css("width", carousels.length * 1226)
          $("<img>")
            .attr("src", carousel.imgUrl)
            .appendTo($carouselImgContainer)

          $indicators.push($("<li>"))
        }
        $indicators.pop()
        this.$elem.find(".indicators").append($indicators)
        this.setIndicators(this.currentIndex)

        // generate indicators
      },
      moveToNext() {
        const $imgContainer = this.$imgContainer
        if (this.currentIndex === this.data.length - 1) {
          $imgContainer.css("left", 0)
          this.currentIndex = 0
        }
        const nextIndex = this._getNextIndex()
        this.setIndicators(nextIndex)

        $imgContainer.animate(
          {
            left: -nextIndex * 1226
          },
          300,
          () => {
            this.currentIndex = nextIndex
          }
        )
      },
      moveToPrev() {
        const $imgContainer = this.$imgContainer
        if (this.currentIndex === 0) {
          this.currentIndex = this.data.length - 1
          $imgContainer.css("left", -this.currentIndex * 1226)
        }

        const prevIndex = this._getPreviousIndex()
        this.setIndicators(prevIndex)

        $imgContainer.animate(
          {
            left: -prevIndex * 1226
          },
          300,
          () => {
            this.currentIndex = prevIndex
          }
        )
      },
      setIndicators(index) {
        if (index === this.data.length - 1) {
          index = 0
        }
        this.$elem
          .find(`.indicators>li:eq(${index})`)
          .addClass("active")
          .siblings()
          .removeClass("active")
      },
      startInterval() {
        this.interval = setInterval(function() {
          carousel.moveToNext()
        }, 2000)
      }
    }

    carousel.init()
  }
}
</script>


<style>
#section-one .carousel {
  height: 460px;
  overflow: hidden;
  position: relative;
}

#section-one .carousel > .imgs {
  position: absolute;
}

#section-one .carousel > .imgs img {
  width: 1226px;
}

#section-one .left-arrow,
#section-one .right-arrow {
  position: absolute;
  width: 41px;
  height: 69px;
  font-size: 35px;
  top: 50%;
  margin-top: -34.5px;
  color: #757575;
  opacity: 0.5;
}

#section-one .left-arrow {
  left: 234px;
}

#section-one .right-arrow {
  right: 0;
}

#section-one .indicators {
  position: absolute;
  right: 20px;
  bottom: 20px;
}

#section-one .indicators li {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin-left: 5px;
}

#section-one .indicators li.active {
  background: rgba(255, 255, 255, 0.4);
  border-color: rgba(0, 0, 0, 0.4);
}
</style>
