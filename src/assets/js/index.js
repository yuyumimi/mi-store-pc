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




