export const state = () => ({
    width: window.innerWidth
})

export const mutations = {
    updateWindowWidth(state) {
        state.width = window.innerWidth
    }
}

export const getters = {
    mobileView: state => state.width <= 660
}