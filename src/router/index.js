import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home/App.vue'
import Portfolio from '@/views/Portfolio/App.vue';
import CV from '@/views/CV/App.vue';
import About from '@/views/About/App.vue';
import Freelance from '@/views/Freelance/App.vue';
import Qualifications from '@/views/Qualifications/App.vue';

const routes = [
    {
        path: '/portfolio-mussot/',
        redirect: '/portfolio-mussot/home'
    },
    {
        path: '/',
        redirect: '/portfolio-mussot/home'
    },
    {
        name:'Home',
        path: '/portfolio-mussot/home',
        component: Home
    },
    {
        name:'Portfolio',
        path: '/portfolio-mussot/portfolio',
        component: Portfolio
    },
    {
        name:'CV',
        path: '/portfolio-mussot/cv',
        component: CV
    },
    {
        name:'Freelance',
        path: '/portfolio-mussot/freelance',
        component: Freelance
    },
    {
        name:'Qualifications',
        path: '/portfolio-mussot/qualifications',
        component: Qualifications
    },
    {
        name:'About',
        path: '/portfolio-mussot/about',
        component: About
    },
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

router.replace("Home");

export default router;