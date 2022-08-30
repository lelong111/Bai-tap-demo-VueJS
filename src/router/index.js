import LogIn from '../components/LogIn.vue';
import Test from '../components/Home.vue';
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
        name: 'Test',
        component: Test,
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router