<template>
  <div id="container" :class="{'mobile': mobileView}">
    <div class="field">
      <div class="title">
        <h2>Popular Movies</h2>
      </div>
      <div class="content">
        <MovieSort />
        <div class="movies">
          <NuxtLink to="/movie-detail/12341234">
            <MovieCard 
              movieName="Jiu Jitsu"
              userScore="58"
              :releaseDate="new Date(2020, 10, 20)"
              image="/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"/>
          </NuxtLink>
          <NuxtLink to="/movie-detail/12341234">
            <MovieCard 
              movieName="Jiu Jitsu"
              userScore="58"
              :releaseDate="new Date(2020, 10, 20)"
              image="/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"/>
          </NuxtLink>
          <NuxtLink to="/movie-detail/12341234">
            <MovieCard 
              movieName="Jiu Jitsu"
              userScore="58"
              :releaseDate="new Date(2020, 10, 20)"
              image="/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"/>
          </NuxtLink>
          <NuxtLink to="/movie-detail/12341234">
            <MovieCard 
              movieName="Jiu Jitsu"
              userScore="58"
              :releaseDate="new Date(2020, 10, 20)"
              image="/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"/>
          </NuxtLink>
          <NuxtLink to="/movie-detail/12341234">
            <MovieCard 
              movieName="Jiu Jitsu"
              userScore="58"
              :releaseDate="new Date(2020, 10, 20)"
              image="/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"/>
          </NuxtLink>
          <NuxtLink to="/movie-detail/12341234">
            <MovieCard 
              movieName="Jiu Jitsu"
              userScore="58"
              :releaseDate="new Date(2020, 10, 20)"
              image="/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"/>
          </NuxtLink>
          <NuxtLink to="/movie-detail/12341234">
            <MovieCard 
              movieName="Jiu Jitsu"
              userScore="58"
              :releaseDate="new Date(2020, 10, 20)"
              image="/eLT8Cu357VOwBVTitkmlDEg32Fs.jpg"/>
          </NuxtLink>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    mobileView() { return this.$store.getters.mobileView }
  }
}
</script>

<style lang="sass" scoped>
#container
  width: 100%
  display: flex
  justify-content: center
  flex-wrap: wrap
  align-items: flex-start
  align-content: flex-start

.mobile
  .field
    padding: 20px
  .content
    flex-direction: column
    width: 100%
    .movies
      margin-top: 20px

.field 
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

.content
  width: 100%
  display: flex
  align-items: flex-start
  align-content: flex-start
  .movies
    background: transparent
    display: flex
    flex-wrap: wrap
</style>
