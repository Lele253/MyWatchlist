import {createRouter, createWebHistory} from 'vue-router'
import LogInView from "@/views/LogInView";
import registrierenView from "@/views/RegistrierenView";
import aboutUsView from "@/views/AboutUsView";
import impressumView from "@/views/ImpressumView";
import listeView from "@/views/ListeView";
import homeView from "@/views/HomeView";


const routes = [
    {
        path: '/',
        name: 'home',
        component: homeView
    },

    {
        path: '/login',
        name: 'Login',
        component: LogInView
    },

    {
        path: '/registrieren',
        name: 'Registrieren',
        component: registrierenView
    },

    {
        path: '/aboutUs',
        name: 'AboutUs',
        component: aboutUsView
    },

    {
        path: '/impressum',
        name: 'Impressum',
        component: impressumView
    },

    {
        path: '/liste',
        name: 'Liste',
        component: listeView
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
