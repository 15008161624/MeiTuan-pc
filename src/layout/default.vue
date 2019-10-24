<template>
  <div class="s1">
    <el-container>
      <el-header>
          <Myindex></Myindex>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Myindex from '@/components/header/index.vue'
export default {
    components:{
         Myindex,
    }
};
</script>
<style lang="scss">
    @import '@/assets/css/public/layout.scss'
</style>