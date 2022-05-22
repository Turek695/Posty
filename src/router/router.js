import Vue from "vue";
import Router from "vue-router";

import PostTable from "../components/PostTable";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Table",
            component: PostTable
        }
    ]
});
