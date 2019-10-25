<template>
  <el-row class="m-header-topbar m-header">
    <el-row>
      <el-col :span="12">
          <Mygeo />
      </el-col>
      <el-col :span="12">
          <mynav />
      </el-col>
    </el-row>
  </el-row>
</template>

<script>
import Mygeo from './geo.vue';
import Mynav from './nav.vue'
export default {
    components:{
        Mygeo,
        Mynav
    }
};
</script>
<style lang="scss">
    @import '@/assets/css/public/header/topbar.scss'
</style>