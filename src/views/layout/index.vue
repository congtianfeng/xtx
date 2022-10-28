<template>
  <appTopNav />
  <appHeader />
  <router-view></router-view>
  <div class="bott">底部</div>
</template>

<script>
import appTopNav from '@/components/app-topnav.vue'
import appHeader from '@/components/app-header.vue'
export default {
  name: 'AppLayout',
  components: { appTopNav, appHeader },
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}

</script>
<style scoped lang ='less'>
</style>
