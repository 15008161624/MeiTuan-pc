<template>
  <div>
    <el-row>
        <topBar />
    </el-row>
    <el-row>
        <searchBar></searchBar>
    </el-row>
  </div>
</template>

<script>
import searchBar from "./searchBar.vue";
import topBar from "./topBar.vue";
export default {
  components: {
    searchBar,
    topBar
  }
};
</script>