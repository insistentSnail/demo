<template>
  <div class="home">
    <!-- 顶部搜索栏 -->
    <div class="search">
      <div class="search-l">LOGO</div>
      <div class="search-r">
          <van-icon class="searchIcon" size="13" color="#000000" name="search" />
          <van-field v-model="searchKey" placeholder="请输入商品名称" />
          <div class="line"></div>
          <div class="searchBtn">搜索</div>
      </div>
    </div>
    <!-- banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 导航栏 -->
    <div class="navLists">
      <ul>
        <li v-for="(item,index) in navLists" :key="index">
          <img :src="item.imgSrc" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>

    <!-- 活动 -->
    <div class="activity">
      <div class="activity-l">
        <div class="topC">
          <div class="th">特惠</div>
          <div class="czth">超值特惠 ></div>
        </div>
        <div class="bottomC">
          <div class="Goods">
            <div class="good"></div>
            <div class="price">￥29.9</div>
          </div>
          <div class="Goods">
            <div class="good"></div>
            <div class="price">￥19.8</div>
          </div>
        </div>
      </div>
      <div class="activity-r">
        <div class="topC">
          <div class="th">秒杀</div>
          <div class="czth">
            <van-count-down :time="time">
              <template #default="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </van-count-down>
          </div>
        </div>
        <div class="bottomC">
          <div class="Goods">
            <div class="good"></div>
            <div class="price">￥88.8</div>
          </div>
          <div class="Goods">
            <div class="good"></div>
            <div class="price">￥99.1</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 热销 -->
    <div class="hot">
      <div class="hot-t">
        <img class="hotIcon" src="@/assets/image/home/hotIcon.png" alt="">
        <img class="rxbd" src="@/assets/image/home/rxbd.png" alt="">
        <div class="tips">实时更新榜单 热度看得见</div>
      </div>
      <div class="hot-b">
        <div class="hotGood">
          <div class="GoodImg"></div>
          <div class="GoodName">粘贴式马桶垫家粘贴式马桶垫家</div>
          <div class="GoodPrcie">
            <div class="GoodPrice-l">惊爆价：</div>
            <div class="GoodPrice-r">￥6.9</div>
          </div>
          <div class="bugNum">已有<span>1.4</span>万人去购买</div>
        </div>
        <div class="hotGood-c">
          <div class="GoodImg"></div>
          <div class="GoodName">浴室拖鞋家居男士浴室拖鞋家居男士</div>
          <div class="GoodPrcie">
            <div class="GoodPrice-l">惊爆价：</div>
            <div class="GoodPrice-r">￥9.9</div>
          </div>
          <div class="bugNum">已有<span>6900</span>人去购买</div>
        </div>
        <div class="hotGood">
          <div class="GoodImg"></div>
          <div class="GoodName">搓澡神器搓澡搓澡神器搓澡</div>
          <div class="GoodPrcie">
            <div class="GoodPrice-l">惊爆价：</div>
            <div class="GoodPrice-r">￥3.9</div>
          </div>
          <div class="bugNum">已有<span>1.4</span>万人去购买</div>
        </div>
      </div>
    </div>

    <div class="likeTitle">
      <div class="line"></div>
      <img src="@/assets/image/home/like.png" alt="">
      <div class="cnxh">猜你喜欢</div>
      <div class="line"></div>
    </div>

    <div class="shopLists">
      <ul>
        <li class="shopList" v-for="(item,index) in 7" :key="index">
          <div class="shopListImg"></div>
          <div class="shipListName">澳洲进口原切格斯儿童菲力牛排草饲牛扒生澳洲进口原切格斯儿童菲力牛排草饲牛扒生</div>
          <div class="shopListPriceAndNum">
            <div class="shopListPrice">
              <div class="unit">￥</div>
              <div class="Price">299.00</div>
            </div>
            <div class="shopListNum">
              已售4620
            </div>
          </div>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name:"Home",
  data() {
    return {
      searchKey:"",
      navLists:[
        {
          title:"超市",
          imgSrc:require("@/assets/image/home/nav1.png")
        },
        {
          title:"买菜",
          imgSrc:require("@/assets/image/home/nav2.png")
        },
        {
          title:"水果",
          imgSrc:require("@/assets/image/home/nav3.png")
        },
        {
          title:"鲜花礼品",
          imgSrc:require("@/assets/image/home/nav4.png")
        },
        {
          title:"送药上门",
          imgSrc:require("@/assets/image/home/nav5.png")
        },
        {
          title:"家居时尚",
          imgSrc:require("@/assets/image/home/nav6.png")
        },
        {
          title:"烘焙蛋糕",
          imgSrc:require("@/assets/image/home/nav7.png")
        },
        {
          title:"签到",
          imgSrc:require("@/assets/image/home/nav8.png")
        },
        {
          title:"鲜豆庄园",
          imgSrc:require("@/assets/image/home/nav9.png")
        },
        {
          title:"手机数码",
          imgSrc:require("@/assets/image/home/nav10.png")
        }
      ],
      time:1316000
    }
  },
}
</script>

<style lang="scss" scoped>
  .home{
    background: #F5F5F5;
    padding-bottom: 65px;
    overflow: hidden;
    // 搜索
    .search{
      background: #fff;
      padding: 27px 15px 15px;
      box-sizing: border-box;
      width: 100%;
      height: 76px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .search-l{
        font-size: 18px;
        font-family: DIN;
        font-weight: bold;
        color: #FF5A11;
      }
      .search-r{
        overflow: hidden;
        width: 280px;
        height: 34px;
        background: #F5F5F5;
        border-radius: 17px;
        display: flex;
        align-items: center;
        .van-cell{
          background: #F5F5F5;
          width: 70%;
        }
        .searchIcon{
          margin-left: 15px;
        }
        .line{
          width: 1px;
          height: 13px;
          background: #DDDDDD;
          border-radius: 1px;
        }
        .searchBtn{
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #FE4D4D;
          margin-left: 10px;
        }
      }
    }
    // banner
    .my-swipe{
      // margin-top: 15px;
      .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #E14F03;
      }
      ::v-deep .van-swipe__indicator{
        width: 10px;
        height: 2px;
        background: #FFFFFF;
        border-radius: 1px;
      }
    } 
    .navLists{
      width: 100%;
      height: 184px;
      padding: 0 15px;
      box-sizing: border-box;
      background: #fff;
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li{
          width: 20%;
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          img{
            width: 42px;
            height: 42px;
          }
          span{
            margin-top: 8px;
            font-size: 12px;
            font-family: PingFangSCMedium;
            font-weight: 400;
            color: #333333;
          }
        }
      }
    }
    .activity{
      margin-top: 10px;
      width: 100%;
      height: 136px;
      display: flex;
      justify-content: space-between;
      .activity-l{
        background: #FFFFFF;
        width: 187px;
        height: 100%;
        box-sizing: border-box;
        padding-left: 20px;
        .topC{
          margin-top: 15px;
          display: flex;
          align-items: center;
          .th{
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #333333;
          }
          .czth{
            margin-left: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 72px;
            height: 16px;
            background: linear-gradient(60deg, #FF4D4D, #FD7C4F);
            border-radius: 8px;
            font-size: 11px;
            font-family: PingFangSCMedium;
            font-weight: 400;
            color: #FFFFFF;
          }
        }
        .bottomC{
          margin-top: 10px;
          width: 150px;
          height: 80px;
          background: linear-gradient(0deg, #FFFBFA, #FFF4F2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .Goods{
            width: 75px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // height: 48px;
            .good{
              width: 48px;
              height: 48px;
              background: #FD7C4F;
              border-radius: 4px;
            }
            .price{
              margin-top: 4px;
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #FE4D4D;
            }
          }
        }
      }
      .activity-r{
        background: #FFFFFF;
        width: 187px;
        height: 100%;
        box-sizing: border-box;
        padding-left: 20px;
        .topC{
          margin-top: 15px;
          display: flex;
          align-items: center;
          .th{
            font-size: 16px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #333333;
          }
          .czth{
            margin-left: 10px;
            .van-count-down{
              line-height: 16px;
              display: flex;
              align-items: center;
            }
            .colon {
              display: inline-block;
              margin: 0 2px;
              height: 16px;
              font-size: 11px;
              font-family: DIN;
              font-weight: 500;
              color: #F1126A;
              line-height: 15px;
            }
            .block {
              width: 16px;
              height: 16px;
              background: linear-gradient(60deg, #FF496B, #EF0A6A);
              border-radius: 2px;
              display: inline-block;
              line-height: 16px;
              text-align: center;
              font-size: 11px;
              font-family: DIN;
              font-weight: 500;
              color: #FFFFFF;
            }
          }
        }
        .bottomC{
          margin-top: 10px;
          width: 150px;
          height: 80px;
          background: linear-gradient(0deg, #FFFBFA, #FFF4F2);
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .Goods{
            width: 75px;
            display: flex;
            flex-direction: column;
            align-items: center;
            // height: 48px;
            .good{
              width: 48px;
              height: 48px;
              background: #FD7C4F;
              border-radius: 4px;
            }
            .price{
              margin-top: 4px;
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #FE4D4D;
            }
          }
        }
      }
    }
    // 热销
    .hot{
      margin-top: 10px;
      width: 100%;
      height: 241px;
      background: linear-gradient(-10deg, #FA5847, #FF6529);
      border-radius: 10px;
      .hot-t{
        height: 35px;
        display: flex;
        align-items: center;
        .hotIcon{
          width: 13px;
          height: 16px;
          margin-left: 15px;
        }
        .rxbd{
          width: 70px;
          height: 14px;
          margin-left: 10px;
        }
        .tips{
          font-size: 11px;
          font-family: PingFangSCMedium;
          font-weight: 400;
          color: #FFFFFF;
          opacity: 0.8;
          margin-left: 10px;
        }
      }
      .hot-b{
        border-radius: 8px;
        height: 206px;
        background: #fff;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        .hotGood{
          margin-top: 33px;
          width: 93px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .GoodImg{
            width: 93px;
            height: 93px;
            background: #FD7C4F;
            border-radius: 5px;
          }
          .GoodName{
            width: 100%;
            font-size: 12px;
            font-family: PingFangSCMedium;
            font-weight: 400;
            color: #333333;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            line-height: 1;
            margin-top: 7px;
          }
          .GoodPrcie{
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-top: 10px;
            line-height: 1;
            .GoodPrice-l{
              font-size: 11px;
              font-family: PingFangSCMedium;
              font-weight: 400;
              color: #333333;
            }
            .GoodPrice-r{
              color:#F52534;
              font-size: 14px;
            }
          }
          .bugNum{
            margin-top: 10px;
            width: 100%;
            font-size: 10px;
            font-family: PingFangSCMedium;
            font-weight: 400;
            color: #666666;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            span{
              color:#F52534;
            }
          }
        }
        .hotGood-c{
          margin-top: 14px;
          width: 112px;
          display: flex;
          flex-direction: column;
          align-items: center;
          .GoodImg{
            width: 112px;
            height: 112px;
            background: #FD7C4F;
            border-radius: 5px;
          }
          .GoodName{
            width: 100%;
            font-size: 12px;
            font-family: PingFangSCMedium;
            font-weight: 400;
            color: #333333;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            line-height: 1;
            margin-top: 7px;
          }
          .GoodPrcie{
            width: 100%;
            display: flex;
            align-items: flex-end;
            margin-top: 10px;
            line-height: 1;
            .GoodPrice-l{
              font-size: 11px;
              font-family: PingFangSCMedium;
              font-weight: 400;
              color: #333333;
            }
            .GoodPrice-r{
              color:#F52534;
              font-size: 14px;
            }
          }
          .bugNum{
            margin-top: 10px;
            width: 100%;
            font-size: 10px;
            font-family: PingFangSCMedium;
            font-weight: 400;
            color: #666666;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            span{
              color:#F52534;
            }
          }
        }
      }
    }
    .likeTitle{
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      .line{
        width: 15px;
        height: 1px;
        background: #E6E6E6;
        border-radius: 1px;
      }
      img{
        width: 20px;
        height: 20px;
        margin-left: 15px;
        margin-right: 10px;
      }
      .cnxh{
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #333333;
        margin-right: 15px;
      }
    }
    .shopLists{
      width: 100%;
      // height: 805px;
      padding:0 20px;
      box-sizing: border-box;
      background: #FFFFFF;
      ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .shopList{
          padding-bottom: 15px;
          margin-top: 20px;
          width: 157px;
          display: flex;
          flex-direction: column;
          .shopListImg{
            width: 157px;
            height: 168px;
            border-radius: 5px;
            background: #FD7C4F;
          }
          .shipListName{
            margin-top: 4px;
            font-size: 14px;
            font-family: PingFangSCMedium;
            font-weight: 400;
            color: #333333;
            line-height: 21px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .shopListPriceAndNum{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 17px;
            line-height: 1;
            .shopListPrice{
              font-size: 13px;
              font-family: PingFang SC;
              font-weight: bold;
              color: #F52534;
              display: flex;
              align-items: center;
              .unit{
              }
              .Price{
                font-size: 15px;
              }
            }
            .shopListNum{
                font-size: 12px;
                font-family: PingFangSCMedium;
                font-weight: 400;
                color: #BBBBBB;
            }
          }
        }
      }
    }
  }
</style>