import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        goodsList: [
            {
                name: 'Назва товару',
                unitMeasurement: "Одиниця виміру",
                number: "Кількість"
            },
            {
                name: 'BMW',
                unitMeasurement: "kg",
                number: 3
            },
            {
                name: 'AUDI',
                unitMeasurement: "kg",
                number: 5
            },
        ],
    },
    getters: {
        getGoodsList: ({ goodsList }) => goodsList,
    },
    mutations: {
        addNewGoods(state, dataObj) {
            state.goodsList.push({
                ...dataObj
            })
        },
        removeNewGoods(state, dataObj) {
            state.goodsList.splice(state.goodsList.indexOf({ ...dataObj })-1, 1)
        }
    },
    actions: {
        addGoods({commit}, data) {
            commit('addNewGoods', data)
        },
        removeGoods({commit}, data) {
            commit('removeNewGoods', data)
        }
    }
})

export default store