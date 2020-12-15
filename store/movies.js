export const state = () => ({
    topRatedMovies: [],
    selectedMovie: {}
})

export const mutations = {
    setMovies(state, data) {
        state.topRatedMovies = data
    },
    setSelectedMovie(state, data) {
        state.selectedMovie = data
    }
}
  
export const actions = {
    FETCH_TOP_RATED_MOVIES({commit}) {
        this.$axios.$get(`/movie/top_rated?api_key=${process.env.apiKey}`)
            .then(res => {
                commit('setMovies', res.results)
            })
            .catch(err => {console.error(err)})
    },
    FETCH_MOVIE_DETAILS({commit}, movieId) {
        this.$axios.$get(`/movie/${movieId}?api_key=${process.env.apiKey}`)
            .then(res => {
                commit('setSelectedMovie', res)
            })
            .catch(err => {console.error(err)})
    }
}