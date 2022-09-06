import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import Vuex from 'vuex';
import storeConfig from './store';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js"


const store = new Vuex.Store(storeConfig);
const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
// import "bootstrap/dist/js/bootstrap.js"
// app.config.productionTip = false;
