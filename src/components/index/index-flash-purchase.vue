<template>
    <section id="flash-purchase">
        <h2>小米闪购</h2>
        <ul class="boxes flex">
            <li class="counter">
                <h3 class="title">20:00 场</h3>
                <img src="https://i1.mifile.cn/f/i/2018/mihome/flashpurchase.png" alt="闪电图标">
                <p>距离开始还有</p>
                <div class="timer flex">
                    <span class="hour">00</span>
                    <span>:</span>
                    <span class="min">24</span>
                    <span>:</span>
                    <span class="sec">45</span>
                </div>
            </li>
            <a href="#">
                <div class="bg"></div>
                <li class="product-item">
                    <img class="product-img" src="../../assets/img/10c6f6ede2fcfa2ad162d2869a716c14.jpg" alt="商品图片">
                    <h3 class="product-title">小米MIX 2 全陶瓷尊享版 8GB+128GB 黑色</h3>
                    <p class="product-desc">Unibody 全陶瓷</p>
                    <p class="price">
                        <span>3699</span>
                        <del>4699</del>
                    </p>
                </li>
            </a>
            <a href="#">
                <div class="bg"></div>
                <li class="product-item">
                    <img class="product-img" src="../../assets/img/e277547c6e3329303dd2c20a327424c4.jpg" alt="商品图片">
                    <h3 class="product-title">小米AI音箱</h3>
                    <p class="product-desc">听音乐、语音遥控家电的人工智能音箱</p>
                    <p class="price">
                        <span>299</span>
                    </p>
                </li>
            </a>
            <a href="#">
                <div class="bg"></div>
                <li class="product-item">
                    <img class="product-img" src="../../assets/img/aeb4f2b6-32a4-81b8-9603-553c69ae9a38.jpg" alt="商品图片">
                    <h3 class="product-title">红米5A 2GB+16GB 铂银灰</h3>
                    <p class="product-desc">轻巧长续航</p>
                    <p class="price">
                        <span>569</span>
                        <del>599</del>
                    </p>
                </li>
            </a>
            <a href="#">
                <div class="bg"></div>
                <li class="product-item">
                    <img class="product-img" src="../../assets/img/7fe00029-d6c0-a048-5deb-8df1fc86a1b4.jpg" alt="商品图片">
                    <h3 class="product-title">小米WiFi电力猫 白色</h3>
                    <p class="product-desc">有插座的地方 就有WiFi</p>
                    <p class="price">
                        <span>209</span>
                        <del>249</del>
                    </p>
                </li>
            </a>
        </ul>

    </section>
</template>

<script>
export default {
    mounted() {
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

            const timerElem = document.querySelector("#flash-purchase .timer")
            const h = timerElem.querySelector(".hour")
            const m = timerElem.querySelector(".min")
            const s = timerElem.querySelector(".sec")

            h.innerHTML = delDate.getUTCHours() < 10 ? "0" + delDate.getUTCHours() : delDate.getUTCHours()
            m.innerHTML = delDate.getMinutes() < 10 ? "0" + delDate.getMinutes() : delDate.getMinutes()
            s.innerHTML = delDate.getSeconds() < 10 ? "0" + delDate.getSeconds() : delDate.getSeconds()
        }
    }
}
</script>

<style>
</style>


