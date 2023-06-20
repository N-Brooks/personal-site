import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ResumeView from "../views/ResumeView.vue"
import PortfolioView from "../views/PortfolioView.vue"
import AboutView from "../views/AboutView.vue"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/resume",
        name: "resume",
        component: ResumeView
    },
    {
        path: "/portfolio",
        name: "portfolio",
        component: PortfolioView
    },
    {
        path: "/about",
        name: "about",
        component: AboutView
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router