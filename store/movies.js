export const state = () => ({
    topRatedMovies: []
})

export const mutations = {
    setMovies(state, data) {
        state.topRatedMovies = data
    }
}
  
export const actions = {
    FETCH_TOP_RATED_MOVIES({commit}) {
        this.$axios.$get(`/movie/top_rated?api_key=${process.env.apiKey}`)
            .then(res => {
                commit('setMovies', res.results)
            })
            .catch(err => {console.error(err)})
    }
}