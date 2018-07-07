<template>
  <div>
    <top-nav-bar />
    <page-header />
    <div class="container">
      <section id="section-one">
        <mi-carousel />
        <side-category />

        <footer class="flex">
          <ul class="bottom-left flex">
            <li>选购手机</li>
            <li>企业团购</li>
            <li>F码通道</li>
            <li>米粉卡</li>
            <li>以旧换新</li>
            <li>话费充值</li>
          </ul>
          <a href="#">
            <img src="../assets/img/xmad_15235208204944_xfguv.jpg" alt="广告图">
          </a>
          <a href="#">
            <img src="../assets/img/xmad_15211196852594_KeNuO.jpg" alt="广告图">
          </a>
          <a href="#">
            <img src="../assets/img/df7c6d47-c09f-49d1-9a9f-df0d2294bec8.jpg" alt="广告图">
          </a>
        </footer>
      </section>
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
              <img class="product-img" src="../assets/img/10c6f6ede2fcfa2ad162d2869a716c14.jpg" alt="商品图片">
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
              <img class="product-img" src="../assets/img/e277547c6e3329303dd2c20a327424c4.jpg" alt="商品图片">
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
              <img class="product-img" src="../assets/img/aeb4f2b6-32a4-81b8-9603-553c69ae9a38.jpg" alt="商品图片">
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
              <img class="product-img" src="../assets/img/7fe00029-d6c0-a048-5deb-8df1fc86a1b4.jpg" alt="商品图片">
              <h3 class="product-title">小米WiFi电力猫 白色</h3>
              <p class="product-desc">有插座的地方 就有WiFi</p>
              <p class="price">
                <span>209</span>
                <del>249</del>
              </p>
            </li>
          </a>
        </ul>
        <mi-banner :imgUrl="banners[0]"></mi-banner>
      </section>
    </div>
    <div id="floors" class="gray-bg">
      <div class="container">
        <template v-for="(floor,index) of floors">
          <index-floor :category="floor.category" :adImgSrcs="floor.adImgSrcs" :key="floor.category.objectId" />
          <mi-banner v-if="banners[index+1]" :imgUrl="banners[index+1]" :key="index" />
        </template>
      </div>
    </div>

    <footer id="site-footer">
      <div class="container">
        <ul class="features flex">
          <li>
            <a href="#">预约维修服务</a>
          </li>
          <li>
            <a href="#">7天无理由退货</a>
          </li>
          <li>
            <a href="#">15天免费换货</a>
          </li>
          <li>
            <a href="#">满150元包邮</a>
          </li>
          <li>
            <a href="#">520余家售后网店</a>
          </li>
        </ul>
        <div class="middle flex">
          <ul class="left flex">
            <li>
              <h3>帮助中心</h3>
              <ul>
                <li>
                  <a href="#">账户管理</a>
                </li>
                <li>
                  <a href="#">购物指南</a>
                </li>
                <li>
                  <a href="#">订单操作</a>
                </li>
              </ul>
            </li>
            <li>
              <h3>服务支持</h3>
              <ul>
                <li>
                  <a href="#">售后政策</a>
                </li>
                <li>
                  <a href="#">购物指南</a>
                </li>
                <li>
                  <a href="#">订单操作</a>
                </li>
              </ul>
            </li>
            <li>
              <h3>线下门店</h3>
              <ul>
                <li>
                  <a href="#">小米之家</a>
                </li>
                <li>
                  <a href="#">服务网点</a>
                </li>
                <li>
                  <a href="#">零售网点</a>
                </li>
              </ul>
            </li>
            <li>
              <h3>关于小米</h3>
              <ul>
                <li>
                  <a href="#">小米之家</a>
                </li>
                <li>
                  <a href="#">服务网点</a>
                </li>
                <li>
                  <a href="#">零售网点</a>
                </li>
              </ul>
            </li>
            <li>
              <h3>关注我们</h3>
              <ul>
                <li>
                  <a href="#">小米之家</a>
                </li>
                <li>
                  <a href="#">服务网点</a>
                </li>
                <li>
                  <a href="#">零售网点</a>
                </li>
              </ul>
            </li>
            <li>
              <h3>特色服务</h3>
              <ul>
                <li>
                  <a href="#">小米之家</a>
                </li>
                <li>
                  <a href="#">服务网点</a>
                </li>
                <li>
                  <a href="#">零售网点</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="right">
            <p class="hot-line">400-100-5678</p>
            <p class="service-time"> 周一至周日 8:00-18:00</p>
            <p class="service-time">（仅收市话费）</p>
            <button class="contact">联系客服</button>
          </div>
        </div>
      </div>
    </footer>
    <footer id="site-info">
      <div class="container">
        <div class="flex">
          <div class="left flex">
            <img src="../assets/img/mi-logo.png" alt="logo" class="logo">
            <div class="right">
              <ul class="sites flex">
                <li>
                  <a href="#">小米商城</a>
                </li>
                <li>
                  <a href="#">MUI</a>
                </li>
                <li>
                  <a href="#">米家</a>
                </li>
                <li>
                  <a href="#">米聊</a>
                </li>
                <li>
                  <a href="#">多看</a>
                </li>
                <li>
                  <a href="#">游戏</a>
                </li>
                <li>
                  <a href="#">音乐</a>
                </li>
                <li>
                  <a href="#">路由器</a>
                </li>
                <li>
                  <a href="#">米粉卡</a>
                </li>
                <li>
                  <a href="#">小米天猫店</a>
                </li>
                <li>
                  <a href="#">隐私政策</a>
                </li>
                <li>
                  <a href="#">问题反馈</a>
                </li>
                <li>
                  <a href="#">Select Region</a>
                </li>
              </ul>
              <p>
                <span>&copy;</span>
                <a href="#">mi.com</a>
                <span>京ICP证110507号</span>
                <a href="#">京ICP备10046444号</a>
                <a href="#">京公网安备11010802020134号</a>
                <a href="#">京网文[2014]0059-0009号</a>
              </p>
              <p> 违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
            </div>
          </div>
          <ul class="info-links">
            <a href="#">
              <img src="../assets/img/truste.png" alt="图片">
            </a>
            <a href="#">
              <img src="../assets/img/v-logo-2.png" alt="图片">
            </a>
            <a href="#">
              <img src="../assets/img/v-logo-1.png" alt="图片">
            </a>
            <a href="#">
              <img src="../assets/img/v-logo-3.png" alt="图片">
            </a>
            <a href="#">
              <img src="../assets/img/ba10428a4f9495ac310fd0b5e0cf8370.png" alt="图片">
            </a>
          </ul>
        </div>
      </div>
    </footer>
    <div id="fixed_tools" class="flex">
      <div class="flex up">
        <a href="#">
          <img class="icon" src="../assets/img/cc0b8948a88a08f6f3b7cd826e09ace6.png" alt="图标">
        </a>
        <a href="#">
          <img class="icon" src="../assets/img/55cad219421bee03a801775e7309b920.png" alt="图标">
        </a>
        <a href="#">
          <img class="icon" src="../assets/img/4f036ae4d45002b2a6fb6756cedebf02.png" alt="图标">
        </a>
        <a href="#">
          <img class="icon" src="../assets/img/d7db56d1d850113f016c95e289e36efa.png" alt="图标">
        </a>
      </div>
      <a href="#">
        <img class="icon" src="../assets/img/totop.png" alt="图标">
      </a>
    </div>
    <project-fixed-bar />
  </div>
</template>

<script>
import "../assets/css/common.css"
import "../assets/css/reset.css"
import "../assets/css/site_theme.css"

import "../assets/js/jquery-3.3.1.min"
import "../assets/js/index.js"

import IndexFloor from "../components/index-floor"
import MiBanner from "../components/mi-banner"
import MiCarousel from "../components/mi-carousel"
import PageHeader from "../components/page-header"
import ProjectFixedBar from "../components/project-fixed-bar"
import SideCategory from "../components/side-category"
import TopNavBar from "../components/top-nav-bar"

export default {
  data() {
    return {
      floors: [
        {
          category: { title: "手机", objectId: "5b3f6dcc9f5454003bf6085b" },
          adImgSrcs: ["https://i1.mifile.cn/a4/xmad_15283420365224_wLvZm.jpg"]
        },
        {
          category: { title: "家电", objectId: "5b40371f67f356003a5f0b67" },
          adImgSrcs: [
            "https://i1.mifile.cn/a4/xmad_15266395374048_JnZQo.jpg",
            "https://i1.mifile.cn/a4/xmad_15123939053142_dFlAw.jpg"
          ]
        },
        {
          category: { title: "智能", objectId: "5b4048582f301e003427b642" },
          adImgSrcs: [
            "https://i1.mifile.cn/a4/xmad_15287211809144_LDIsa.jpg",
            "https://i1.mifile.cn/a4/xmad_14950995035103_fhWtH.jpg"
          ]
        },
        {
          category: { title: "搭配", objectId: "5b4048629f545400311ce1d5" },
          adImgSrcs: [
            "https://i1.mifile.cn/a4/xmad_15277816294188_wikHT.jpg",
            "https://i1.mifile.cn/a4/xmad_15277814391495_RBqUe.jpg"
          ]
        },
        {
          category: { title: "配件", objectId: "5b40486cfe88c20035e14043" },
          adImgSrcs: [
            "https://i1.mifile.cn/a4/xmad_15222058002076_sWEmR.jpg",
            "https://i1.mifile.cn/a4/xmad_15290668700648_LpwQf.jpg"
          ]
        },
        {
          category: { title: "周边", objectId: "5b40487667f356003a5fb94a" },
          adImgSrcs: [
            "https://i1.mifile.cn/a4/xmad_15284596646115_wNMGC.jpg",
            "https://i1.mifile.cn/a4/xmad_15162458631619_LTmcI.jpg"
          ]
        }
      ],
      banners: [
        "https://i1.mifile.cn/a4/xmad_15299774887546_atPHd.jpg",
        "https://i1.mifile.cn/a4/xmad_15302841772912_KtGTu.jpg",
        "https://i1.mifile.cn/a4/xmad_15204795762271_ZwaxE.jpg",
        "https://i1.mifile.cn/a4/xmad_15204799796935_WjnpM.jpg",
        "https://i1.mifile.cn/a4/xmad_15204798088946_YvzWs.jpg",
        "https://i1.mifile.cn/a4/xmad_15282822747649_UXhkN.jpg"
      ]
    }
  },
  components: {
    IndexFloor,
    MiCarousel,
    MiBanner,
    PageHeader,
    ProjectFixedBar,
    SideCategory,
    TopNavBar
  }
}
</script>

<style>
#site-info .logo {
  background: #ff6700;
}

.page-nav a {
  margin-left: 15px;
  font-size: 16px;
}

/* section one */
#section-one {
  position: relative;
  margin-top: 16px;
}

/* 分类导航 */
#site-category {
  position: absolute;
  left: 0;
  top: 0;
  width: 234px;
  height: 460px;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
  box-sizing: border-box;
}

#site-category li {
  width: 100%;
  height: 42px;
  cursor: pointer;
  padding-left: 30px;
  padding-right: 30px;
}

#site-category li:hover {
  background: #ff6700;
}

#section-one footer {
  height: 170px;
  margin-top: 20px;
  align-items: stretch;
}

#section-one footer .bottom-left {
  width: 234px;
  background: #5f5750;
  color: #ffffff;
  flex-wrap: wrap;
  text-align: center;
}

#section-one footer .bottom-left li {
  width: 33%;
}

#section-one footer img {
  width: 316px;
  height: 170px;
}

/* 小米闪购 */

#flash-purchase {
  margin-top: 20px;
}

#flash-purchase > h2 {
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333333;
}

#flash-purchase .boxes li {
  width: 234px;
  height: 340px;
  border-top: 1px solid #f00;
}

#flash-purchase .boxes > li {
  background: #f1eded;
}

#flash-purchase .boxes > a {
  position: relative;
}

#flash-purchase .counter {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0 20px;
}

#flash-purchase .counter .title {
  font-size: 21px;
  color: #ef3a3b;
  font-weight: 400;
}

#flash-purchase .counter > p {
  color: rgba(0, 0, 0, 0.54);
  font-size: 15px;
}

#flash-purchase .timer {
  width: 168px;
}

#flash-purchase .timer > span:nth-child(2n + 1) {
  width: 46px;
  height: 46px;
  line-height: 46px;
  text-align: center;
  background: #605751;
  color: #ffffff;
  font-size: 24px;
}

#flash-purchase .timer > span:nth-child(2n) {
  width: 15px;
  height: 46px;
  text-align: center;
  line-height: 46px;
  color: #605751;
  font-size: 28px;
}

#flash-purchase .bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.02);
}

#flash-purchase .product-item {
  text-align: center;
  padding-top: 39px;
}

#flash-purchase .product-img {
  width: 160px;
  height: 160px;
  margin: 0 auto 22px;
}

#flash-purchase .product-title,
#flash-purchase .product-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#flash-purchase .product-title {
  font-size: 14px;
  font-weight: 400;
}

#flash-purchase .product-desc {
  font-size: 12px;
  color: #b0b0b0;
  margin-top: 0.5em;
}

#flash-purchase .price {
  color: #ff6709;
  margin-top: 1em;
}

#flash-purchase .price span::after,
#flash-purchase .price del::after {
  content: " 元";
}

#flash-purchase .price del {
  color: #b0b0b0;
  margin-left: 0.5em;
}

#floors {
  padding-bottom: 60px;
}

#floors .floor-title {
  font-size: 22px;
  font-weight: 200;
  line-height: 58px;
  color: #333333;
}

#floors .view-all {
  font-size: 16px;
  color: #424242;
  transform: all 0.4s;
  font-weight: 400;
}

div.gray-bg {
  background: #f5f5f5;
}

.floor-body {
  margin-top: 14px;
  height: 614px;
  align-items: stretch;
  box-sizing: border-box;
}

.floor-body .left {
  width: 234px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.floor-body .left-two > a {
  height: 300px;
}

.floor-body .left-two img {
  width: 100%;
  height: 100%;
}

.floor-body .right {
  display: flex;
  justify-content: space-between;
  width: 992px;
  margin-left: 14px;
  flex-wrap: wrap;
  align-content: space-between;
  /* background: #000; */
}

.floor-cell {
  width: 234px;
  height: 300px;
  box-sizing: border-box;
  background: #fff;
  padding: 20px 10px;
  text-align: center;
  transition: all 0.2s linear;
}

.floor-cell:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.floor-cell .img {
  width: 160px;
  height: 160px;
}

.floor-cell .title {
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.floor-cell .desc {
  font-size: 12px;
  color: #b0b0b0;
  margin-top: 0.5em;
}

.floor-cell .price {
  margin-top: 1em;
}

.floor-cell .price > span {
  color: #ff6700;
}

.floor-cell .price > span::after,
.floor-cell .price > del::after {
  content: "元";
}

.floor-cell .price > del {
  margin-left: 0.5em;
  color: #b0b0b0;
}

#phone {
  margin-top: 50px;
}

#phone .left > img {
  width: 100%;
  height: 100%;
}

#site-footer .features {
  padding: 27px 0;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

#site-footer .features > li {
  flex-grow: 1;
}

#site-footer .features > li:not(:last-child) {
  border-right: 1px solid #e0e0e0;
}

#site-footer .middle {
  padding: 40px 0;
}

#site-footer .middle .left h3 {
  font-size: 14px;
  line-height: 1.25;
  color: #424242;
  font-weight: normal;
  margin-bottom: 26px;
}

#site-footer .middle .left li {
  width: 160px;
  margin: 10px 0;
  color: #757575;
  font-size: 12px;
}

#site-footer .right {
  width: 251px;
  border-left: 1px solid #e0e0e0;
  text-align: center;
  color: #616161;
}

#site-footer .right .hot-line {
  font-size: 22px;
  color: #ff6700;
  line-height: 1;
  margin-bottom: 5px;
}

#site-footer .right .service-time {
  font-size: 12px;
}

#site-footer .contact {
  width: 128px;
  height: 28px;
  margin-top: 16px;
  border: 1px solid #ff6700;
  background: #fff;
  color: #ff6700;
  font-size: 12px;
}

#site-info {
  padding: 30px 0;
  font-size: 12px;
  background: #fafafa;
  color: #b0b0b0;
}

#site-info .left {
  justify-content: flex-start;
}

#site-info .logo {
  margin-right: 10px;
}

#site-info .sites {
  width: 642px;
  line-height: 18px;
  color: #757575;
}

#site-info .sites > li {
  flex-shrink: 0;
}

#site-info .sites > li:not(:last-child)::after {
  content: "|";
  margin: 0 0.25em;
  line-height: 18px;
  font-family: sans-serif;
  color: #b0b0b0;
}

#site-info .info-links img {
  height: 28px;
}

#fixed_tools {
  position: fixed;
  bottom: 70px;
  right: 50%;
  margin-right: -640px;
  width: 27px;
  height: 216px;
  flex-direction: column;
}

#fixed_tools > .up {
  flex-direction: column;
  border-top: 1px solid #f5f5f5;
}

#fixed_tools a {
  width: 25px;
  height: 39px;
  background: #fff;
  border: 1px solid #f5f5f5;
  border-top: 0;
}

#fixed_tools .icon {
  width: 20px;
  height: 20px;
  padding-top: 9px;
  margin: 0 2px;
}
</style>

