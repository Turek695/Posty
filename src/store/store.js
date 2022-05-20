import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: null
    },
    getters: {
        // post(state) {
        //     return id => {
        //         const index =
        //     }
        // },
        search(state, phrase) {
            return state.posts.filter(
                post =>
                    post.title.includes(phrase) || post.body.includes(phrase)
            );
        }
    }
});
