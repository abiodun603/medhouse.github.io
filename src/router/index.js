import Homepage from '../screens/Homepage.vue';
import Register from '../screens/auth/Register.vue';
import Login from '../screens/auth/Login.vue';
import Forget from '../screens/auth/forget-pass.vue';
import ResetPassword from '../screens/auth/ResetPassword';
import DashThree from '../screens/DashThree.vue';
import DashOne from '../screens/DashOne.vue';
import DashTwo from '../screens/DashboardTwo.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Homepage
    },

    {
        path: '/register',
        name: 'Register',
        component: Register,
    },

    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

    {
        path: '/forget-password',
        name: 'ForgetPassword',
        component: Forget,
    },

    {
        path: '/reset-password/:token',
        name: 'ResetPassword',
        component: ResetPassword,
    },

    {
        path: '/dashboardthree',
        name: 'Dashboardthree',
        component: DashThree,
    },

    {
        path: '/dashtwo',
        name: 'DashTwo',
        component: DashTwo,
    },

    {
        path: '/dashone',
        name: 'DashOne',
        component: DashOne,
    },
]

const router = createRouter({ history: createWebHistory("medhouse.github.io"), routes: routes })
export default router