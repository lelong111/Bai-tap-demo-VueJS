import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Vuex from 'vuex';
import storeConfig from './store';


const store = new Vuex.Store(storeConfig);
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')


