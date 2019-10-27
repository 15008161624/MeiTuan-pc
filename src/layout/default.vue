<template>
  <div class="layout-default">
    <el-container>
      <el-header height="">
          <Myindex></Myindex>
      </el-header>
      <el-main>
            <router-view></router-view>
        </el-main>
      <el-footer height=""><myFooter /></el-footer>
    </el-container>
  </div>
</template>

<script>
import Myindex from '@/components/header/index.vue'
import myFooter from '@/components/footer/index.vue'
export default {
  components: {
    Myindex,
    myFooter
  }
}
</script>
<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>
