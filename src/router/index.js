import LogIn from '../components/LogIn.vue';
import Home from '../components/Home.vue';
import { createRouter, createWebHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        name: '',
        component: LogIn,
    },
    {
        path: '/login',
        name: 'Login',
        component: LogIn,
    },
    {
        path: '/home',
        // name: 'Home',
        component: Home,
        children: [
            {
                path: 'list-user',
                redirect: '/home'
            },
            {
                path: 'list-user',
                name: 'Home',
                component: 'Home',
            }
        ],
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router