
getProducts(6).then((zhouBianProds) => {
  const frag = document.createDocumentFragment()
  for (const product of zhouBianProds) {
    frag.appendChild(createFloorCell(product))
  }
  const related = document.getElementById('related')
  const parentElem = related.querySelector('div.floor-body>ul.right')
  parentElem.appendChild(frag)
})

setInterval(setCounter, 100)

function setCounter() {
  const now = new Date()
  const target = new Date(now)
  target.setHours(20, 0, 0)
  let del = target - now

  if (del < 0) {
    del += 3600 * 24 * 1000
  }
  const delDate = new Date(del)

  const timerElem = document.querySelector('#flash-purchase .timer')
  const h = timerElem.querySelector('.hour')
  const m = timerElem.querySelector('.min')
  const s = timerElem.querySelector('.sec')

  h.innerHTML = delDate.getUTCHours() < 10 ? ('0' + delDate.getUTCHours()) : delDate.getUTCHours()
  m.innerHTML = delDate.getMinutes() < 10 ? ('0' + delDate.getMinutes()) : delDate.getMinutes()
  s.innerHTML = delDate.getSeconds() < 10 ? ('0' + delDate.getSeconds()) : delDate.getSeconds()
}


function createFloorCell({ title, sub_title, price, orig, img }) {
  const li = document.createElement('li')
  li.innerHTML =
    `<img class="img" src="${img}" alt="手机图片">
  <a href="#">
      <h5 class="title">${title}</h5>
  </a>`
  sub_title && (li.innerHTML += `<p class="desc">${sub_title}</p>`)
  li.innerHTML +=
    `<p class="price">
    <span>${price.replace('.00', '')}</span>`
    + (orig ? `<del>${orig}</del>` : '')
    + '</p>'

  li.className = 'floor-cell'

  return li
}

function getProducts(typeId = 1, limit = 10) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const url = `php/get_products.php?typeId=${typeId}&limit=${limit}`
    xhr.open('get', url, true)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        try {
          const result = JSON.parse(xhr.responseText)
          resolve(result)
        } catch (error) {
          console.error(error);
          console.log(xhr.responseText);
        }
      }
    }
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.send()
  })
}

// 站点导航
const nav = {
  $elem: null,
  data: null,
  init() {
    this.$elem = $('#site-category')
    $.ajax({ url: 'php/get_site_nav.php', dataType: 'json' })
      .then(data => {
        this.data = data.data
        this.load()
      },
        error => {
          // alert('网络故障，请检查')
        }
      )
  },
  load() {
    const $nav1s = []
    for (const nav1 of this.data) {
      const $nav1 = $('<li class="flex">').html(`<span>${nav1.title}</span>`).append('<i class="icon-youjiantou1 iconfont"></i>')
      $nav1s.push($nav1)
    }
    this.$elem.append($nav1s)
  }
}

nav.init()

// 轮播图
const carousel = {
  currentIndex: 0,
  $elem: $('div.carousel'),
  $imgContainer: $('div.carousel>.imgs'),
  interval: null,
  data: null,
  init() {
    $.ajax({ url: 'php/get_index_carousel.php', dataType: 'json' })
      .then(carousels => {
        this.data = carousels
        this.data.push(this.data[0])
        this.load()
      }, error => [
        // alert('网络故障，请检查')
      ])
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
    $elem.find('.right-arrow').click(() => {
      this.moveToNext()
    })
    $elem.find('.left-arrow').click(() => {
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
  }
  ,
  load() {
    const carousels = this.data

    // generate imgs
    const $carouselImgContainer = this.$imgContainer

    const $indicators = []
    for (const carousel of carousels) {
      $carouselImgContainer.css('width', carousels.length * 1226)
      $('<img>').attr('src', carousel.img).appendTo($carouselImgContainer)

      $indicators.push($('<li>'))
    }
    $indicators.pop()
    this.$elem.find('.indicators').append($indicators)
    this.setIndicators(this.currentIndex)

    // generate indicators

  },
  moveToNext() {
    const $imgContainer = this.$imgContainer
    if (this.currentIndex === this.data.length - 1) {
      $imgContainer.css('left', 0)
      this.currentIndex = 0
    }
    const nextIndex = this._getNextIndex()
    this.setIndicators(nextIndex)

    $imgContainer.animate({
      left: - nextIndex * 1226
    }, 300, () => {
      this.currentIndex = nextIndex
    })
  },
  moveToPrev() {
    const $imgContainer = this.$imgContainer
    if (this.currentIndex === 0) {
      this.currentIndex = this.data.length - 1
      $imgContainer.css('left', -this.currentIndex * 1226)
    }

    const prevIndex = this._getPreviousIndex()
    this.setIndicators(prevIndex)


    $imgContainer.animate({
      left: -prevIndex * 1226
    }, 300, () => {
      this.currentIndex = prevIndex
    })


  },
  setIndicators(index) {
    if (index === this.data.length - 1) {
      index = 0
    }
    this.$elem.find(`.indicators>li:eq(${index})`).addClass('active').siblings().removeClass('active')
  }
  ,
  startInterval() {
    this.interval = setInterval(function () {
      carousel.moveToNext()
    }, 2000)
  }
}

carousel.init()



