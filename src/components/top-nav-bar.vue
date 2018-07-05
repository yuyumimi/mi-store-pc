<template>
  <header id="top-bar">
    <div class="container">
      <div class="flex">
        <div>
          <a href="#" class="link">小米商城</a>
          <a href="#" class="link">MIUI</a>
          <a href="#" class="link">IoT</a>
          <a href="#" class="link">云服务</a>
          <a href="#" class="link">水滴</a>
          <a href="#" class="link">金融</a>
          <a href="#" class="link">有品</a>
          <a href="#" class="link">Select Region</a>
        </div>

        <div class="flex right">
          <div>
            <a href="#" class="link">登录</a>
            <a href="#" class="link">注册</a>
            <a href="#" class="link">消息通知</a>
          </div>
          <div class="shopping-cart">
            <a class="menu-btn" href="#">
              <i class="icon-daohanggouwuche iconfont"></i>
              购物车(0)
            </a>
            <div class="cart">
              <p class="empty-text">购物车中还没有商品，赶紧选购吧</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
#top-bar {
  background: #333;
  color: #b0b0b0;
  height: 40px;
  font: 14px/1.5 "Helvetica Neue", Helvetica, Arial, "Microsoft Yahei",
    "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
}

#top-bar .container {
  height: 100%;
}

#top-bar a.link:not(:last-child) {
  border-right: 1px solid #424242;
  padding-right: 0.5em;
  margin-right: 0.5em;
}

#top-bar a.link:hover {
  color: #ffffff;
}

#top-bar .shopping-cart {
  position: relative;
  margin-left: 30px;
}

#top-bar .shopping-cart .menu-btn {
  display: block;
  background: #424242;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
}

#top-bar .shopping-cart:hover .menu-btn {
  background: #ffffff;
  color: #ff6700;
}

#top-bar .shopping-cart .cart {
  position: absolute;
  width: 316px;
  height: 0;
  top: 40px;
  right: 0;
  color: #424242;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  padding: 15;
  overflow: hidden;
  background: #fff;
  transition: all 0.3s;
}

#top-bar .shopping-cart:hover .cart {
  height: 100px;
  z-index: 10;
}

#top-bar .shopping-cart .empty-text {
  text-align: center;
  margin-top: 30px;
}
</style>
