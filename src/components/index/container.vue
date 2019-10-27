<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item, index) in nav.list"
        :key="index"
        :class="{active: kind == item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image">
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.sub_title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价{{item.price_info.old_price}}</span>
               <span class="sold bottom-right-info">{{item.address}}</span>
           
            </div>
            
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>

export default {
  data() {
    return {
      kind: "all",
      list:[
          {
              image:"https://p1.meituan.net/msmerchant/3bc53ab3697c9b86696a62500809bd198782876.jpg@460w_260h_1e_1c",
              title:"储缘蛋糕（大丰街店）",
              sub_title:"6英寸欧式水果蛋糕（helloKitty海绵宝宝、多啦a梦）免费赠送蜡烛、配送叉盘-1个，约6英寸，圆型",
              price_info:{
                     current_price:18,
                     old_price:"36",
              },
              address:"阿拉斯加"
          },
          {
              image:"https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@460w_260h_1e_1c",
              title:"储缘蛋糕（大丰街店）",
              sub_title:"6英寸欧式水果蛋糕（helloKitty海绵宝宝、多啦a梦）免费赠送蜡烛、配送叉盘-1个，约6英寸，圆型",
              price_info:{
                     current_price:"18",
                     old_price:"36",
              },
              address:"阿拉斯加"
          },
          {
              image:"https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@460w_260h_1e_1c",
              title:"储缘蛋糕（大丰街店）",
              sub_title:"6英寸欧式水果蛋糕（helloKitty海绵宝宝、多啦a梦）免费赠送蜡烛、配送叉盘-1个，约6英寸，圆型",
              price_info:{
                     current_price:"18",
                     old_price:"36",
              },
              address:"阿拉斯加"
          },
          {
              image:"https://p1.meituan.net/msmerchant/492ea4754d9b441f60d20d3952c47e321227835.jpg@460w_260h_1e_1c",
              title:"储缘蛋糕（大丰街店）",
              sub_title:"6英寸欧式水果蛋糕（helloKitty海绵宝宝、多啦a梦）免费赠送蜡烛、配送叉盘-1个，约6英寸，圆型",
              price_info:{
                     current_price:"18",
                     old_price:"36",
              },
              address:"阿拉斯加"
          }
      ]
    };
  },
  
  props: ["nav"],
  
  methods: {
    over(e) {
      console.log(e.target);
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }
      this.kind = dom.getAttribute("data-type");
      // 动态获取数据  ajax请求
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>

