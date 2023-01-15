import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home/App.vue'
import Portfolio from '@/views/Portfolio/App.vue';
import CV from '@/views/CV/App.vue';
import About from '@/views/About/App.vue';
import Freelance from '@/views/Freelance/App.vue';
import Qualifications from '@/views/Qualifications/App.vue';

const routes = [
    {
        name:'Home',
        path: '/home',
        component: Home
    },
    {
        name:'Portfolio',
        path: '/portfolio',
        component: Portfolio
    },
    {
        name:'CV',
        path: '/cv',
        component: CV
    },
    {
        name:'Freelance',
        path: '/freelance',
        component: Freelance
    },
    {
        name:'Qualifications',
        path: '/qualifications',
        component: Qualifications
    },
    {
        name:'About',
        path: '/about',
        component: About
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;