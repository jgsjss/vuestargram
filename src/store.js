import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 38,
            likes: 0,
            clickLikes: false,
            more: {},

        }
    },
    mutations: {
        changeName(state) {
            state.name = 'Park'
        },
        sumAge(state) {
            state.age++
        },
        likesUp(state) {
            if (state.clickLikes == false) {
                state.likes++;
                state.clickLikes = true;
            }
            else {
                state.likes--
                state.clickLikes = false;
            }
        },
        setMore(state, data) {
            state.more = data
        }
    },
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`)
                .then((a) => {
                    console.log(a.data)
                    context.commit('setMore', a.data)

                })
        }
    },
})

export default store