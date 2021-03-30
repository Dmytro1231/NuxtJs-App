export const state = () => ({
    products: []
})

export const mutations = {
    SET_PRODUCTS(state, products) {
        state.products = products
    }
}