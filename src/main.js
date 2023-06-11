import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import './tailwind.css'
import './axioss.js'
import store from './store';
import {createPinia} from 'pinia'
import VueImageZoomer from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css';
import VueApexCharts from "vue3-apexcharts";

const pinia=createPinia()


import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

pinia.use(piniaPluginPersistedstate)



createApp(App).use(router).use(pinia).use(store).use(VueApexCharts).use(VueImageZoomer).mount('#app')





// import App from './App.vue'

// import { createApp } from 'vue'


// import './tailwind.css'
// import router from './routes/index.js'



// app.use(router)


// app.mount("#app");
