
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




