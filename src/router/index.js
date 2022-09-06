import LogIn from '../components/LogIn.vue';
import Home from '../components/Home.vue';
import ScreenWhite from '../components/Sceen1/ScreenWhite.vue';
import ScreenWhite2 from '../components/Sceen1/ScreenWhite2.vue';
import Demo from '../components/DemoVuex.vue';
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
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'list-users',
                redirect: '/home'
            },
            {
                path: 'ghi-chu/:test',
                component: ScreenWhite,
            },
            {
                path: 'menu/:menu',
                component: ScreenWhite2,
            }
            
        ],
    },
    {
        path: '/abc',
        name: 'Loginasd',
        component: Demo,
    },
    
    
    
    
    
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router