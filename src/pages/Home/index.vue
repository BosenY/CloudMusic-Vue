<template>
  <div class="home">
    <by-header></by-header>
    <Tabbar @toggle="toggle"></Tabbar>
  </div>
</template>

<script>
import { ByHeader, Tabbar } from '@/components'

export default {
  data() {
    return {
      result: {},


    }
  },
  methods: {
    toggle(val) {
        console.log(val)
    }
  },
  components: {
      ByHeader,
      Tabbar
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import './style.styl';

</style>
