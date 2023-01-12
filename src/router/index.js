import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from "@/views/LogInView";
import registrierenView from "@/views/RegistrierenView";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },

    {
        path: '/login',
        name: 'login',
        component: LogInView
    },

    {
        path: '/registrieren',
        name: 'registrieren',
        component: registrierenView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
