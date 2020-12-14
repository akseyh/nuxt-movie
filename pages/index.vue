<template>
  <div id="container" :class="{'mobile': mobileView}">
    <div class="field">
      <div class="title">
        <h2>Popular Movies</h2>
      </div>
      <div class="content">
        <MovieSort />
        <div class="movies">
          <NuxtLink 
            v-for="movie in topRatedMovies" 
            :key="movie.id"
            :to="`/movie-detail/${movie.id}`">
            <MovieCard 
              :movieName="movie.title"
              :userScore="movie.popularity"
              :releaseDate="movie.release_date"
              :image="movie.poster_path"/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    mobileView() { return this.$store.getters.mobileView },
    ...mapState('movies', [
      'topRatedMovies'
    ])
  },
  created() {
    this.$store.dispatch('movies/FETCH_TOP_RATED_MOVIES')
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
