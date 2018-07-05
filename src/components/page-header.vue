<template>
  <header id="page-header" class="container">
    <div class="flex">
      <div class="left flex">
        <div class="logo-area flex">
          <img src="../assets/img/mi-logo.png" alt="mi-logo" class="logo">
          <img src="../assets/img/pclogoheisha.gif" alt="ads" class="ads">
        </div>
        <nav class="page-nav">
          <a href="#">小米手机</a>
          <a href="#">红米</a>
          <a href="#">电视</a>
          <a href="#">笔记本</a>
          <a href="#">盒子</a>
          <a href="#">新品</a>
          <a href="#">路由器</a>
          <a href="#">智能硬件</a>
          <a href="#">服务</a>
          <a href="#">社区</a>
        </nav>
      </div>
      <div class="search-box flex">
        <input type="text" class="search-input">
        <button class="search-btn">
          <i class="iconfont icon-sousuo"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style>
/* page header */
#page-header {
  margin-top: 20px;
}

#page-header .left {
  justify-content: flex-start;
}

#page-header .logo-area {
  width: 234px;
}

#page-header .logo,
#site-info .logo {
  background: #ff6700;
}

.page-nav a {
  margin-left: 15px;
  font-size: 16px;
}

#page-header .search-box {
  height: 48px;
}

#page-header .search-input,
#page-header .search-btn {
  border: 1px solid #e0e0e0;
}

#page-header .search-input {
  width: 223px;
  height: 100%;
  border-right: 0;
}

#page-header .search-btn {
  width: 52px;
  height: 100%;

  background: inherit;
}
</style>
