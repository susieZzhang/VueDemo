<template>
  <div class="planList">
    <table>
      <thead>
        <th>名称</th>
        <th>方案/预案</th>
        <th>类型</th>
        <th>简介</th>
        <th>操作</th>
      </thead>
      <tbody>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{item.title}}</td>
          <td>{{item.planType}}</td>
          <td>{{item.eventType}}</td>
          <td>{{item.description}}</td>
          <td @click="getDetail(item.id)">详情</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { getList } from '@/assets/js/api.js'
export default {
  name: 'index',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getPlanList()
  },
  methods: {
    getPlanList () {
      getList({
        offset: 0,
        limit: 9,
        condition: '',
        state: 2,
        play: '0, 1'
      }).then(res => {
        if (res.data.code === 200) {
          this.list = res.data.data
        }
      })
    },
    getDetail (id) {
      this.$router.push({
        name: 'plan',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style scoped>
.planList table {
  margin-top: 60px;
  width: 100%;
}
</style>
