<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="搜索商家或地点" @focus="focusInput" @blur="blurInput" ></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="isHotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item, index) in hotPlaceList" :key="item + '_'+ index">
                            <router-link  :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="isSearchList">
                        <dd v-for="(item, index) in searchList" :key="index">
                            <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
                        </dd>
                    </dl>
                </div>
                <p class="suggest">
                    <router-link v-for="(item, index) in suggestList" :key="item + '~' + index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>

                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>

export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList: ['成都欢乐谷', '贤合庄卤味火锅', '成都失恋博物馆', '鮨·初雲'],
      searchList: ['火锅', '卤味火锅', '嚯嚯嚯嚯', '0.0.0.0.0'],
      suggestList: ['北京故宫博物院', '尚隐·泉都市生活馆', '故宫珍宝馆', '北京连升商务酒店']
    }
  },

  computed: {
    isHotPlace () {
      return !this.searchWord && this.isFocus
    },
    isSearchList () {
      return this.searchWord && this.isFocus
    }
  },

  methods: {
    focusInput () {
      this.isFocus = true
    },
    blurInput () {
      var self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    }

  },
  mounted () {

  }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/search.scss';
    @import '@/assets/css/public/header/index.scss'
</style>
