<template>
  <div>
    <img :src="require('@/assets/img/1.png')" alt>
    <img src="../assets/img/1.png" alt>
  </div>
</template>
<script>
export default {
  props: ['id'],
  name: 'plan',
  data() {
    return {

    }
  },
  created() {
    let id = this.$route.params.id
    console.log(id)
  }
}
</script>
