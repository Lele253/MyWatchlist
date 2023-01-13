import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from "@/views/LogInView";
import registrierenView from "@/views/RegistrierenView";
import aboutUsView from "@/views/AboutUsView";
import impressumView from "@/views/ImpressumView";
import listeView from "@/views/ListeView";


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

    {
        path: '/aboutUs',
        name: 'aboutUs',
        component: aboutUsView
    },

    {
        path: '/impressum',
        name: 'impressum',
        component: impressumView
    },

    {
        path: '/liste',
        name: 'liste',
        component: listeView
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
