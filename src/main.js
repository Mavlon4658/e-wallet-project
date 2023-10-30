import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../src/assets/style.scss'
import '../src/assets/_responsive.scss'
import moment from 'moment'
import jQuery from "jquery";
const $ = jQuery;
window.$ = $;

createApp(App)
    .use(moment)
    .use($)
    .use(store)
    .use(router)
    .mount('#app')
