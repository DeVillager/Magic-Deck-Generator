import App from './App.vue'
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = Vue.createApp(App)
app.mount('#app')
app.use(VueAxios, axios)

