import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: null
    },
    mutations: {
        postDelete(state, payload) {
            let index = state.posts.findIndex(
                element => element.id === payload.postId
            );
            console.log(index);
            state.posts.splice(index, 1);
        }
    },
    actions: {
        postDelete({ commit, state }, payload) {
            axios
                .delete(
                    "https://jsonplaceholder.typicode.com/posts/" +
                        payload.postId,
                    {
                        method: "delete"
                    }
                )
                .then(() => commit("postDelete", payload))
                .catch(e => console.log("Coś poszło nie tak: ", e));
        }
    }
});
