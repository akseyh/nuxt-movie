<template>
  <div class="text-center">
    <b class="title">NUXT MOVIE</b>
    <div>
      MOBILE: {{$store.getters['mobileView']}}
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleView() {
      this.$store.commit('updateWindowWidth')
    }
  },
  created() {
    this.handleView()
    window.addEventListener('resize', this.handleView)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleView)
  }
}
</script>

<style>
.title {
  font-size: 50px;
}
</style>
