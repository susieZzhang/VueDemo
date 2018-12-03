<template>
  <div>
    <div class="nav">
      <router-link  :to="{name: 'index'}">预案列表</router-link>
      <router-link  :to="{name: 'plan'}">预案管理</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
</style>
