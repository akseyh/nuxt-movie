<template>
  <div id="container">
    <div class="content">
      <div class="title">
        <h2>Popüler Filmler</h2>
      </div>
      <div>
        MOBILE: {{$store.getters['mobileView']}}
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
#container
  width: 100%
  display: flex
  justify-content: center
  flex-wrap: wrap
  align-items: flex-start
  align-content: flex-start

.content 
  width: 100vw
  max-width: 1300px
  display: flex
  flex-direction: column
  align-items: flex-start
  align-content: flex-start
  padding: 30px 40px 30px 40px

.title
  width: 100%
  margin-bottom: 20px
  font-size: 1.6rem
  font-weight: 600
</style>
