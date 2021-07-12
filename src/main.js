import { createApp } from 'vue'
import App from './App.vue'
import {ValidationObserver, ValidationProvider, extend, localize} from "vee-validate"
// import en from "vee-validate/dist/locale/en.json"
// import * as rules from "vee-validate/dist/rules"
import store from "./store/store"
// import './assets/css/bootstrap.min.css'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-vue/dist/bootstrap-vue.css"
import './assets/css/mdb.min.css'
import './assets/css/style.css'
import './assets/css/fontawesome-free-5.15.1-web/css/all.min.css'
import 'es6-promise/auto'
import axios from 'axios';
// import './assets/css/dashstyle.css'

import './assets/js/jquery.min.js'
import './assets/js/popper.min.js'
import './assets/js/bootstrap.min.js'
// import './assets/js/mdb.min.js'
import './assets/js/calender.js'

//install VeeValidate rules and localization
// Object.keys(rules).forEach(rule => {
//     extend(rule, rules[rule]);
// });

// localize("en", en);

// Install VeeValidate components globally
// Vue.component("ValidationObserver", ValidationObserver);
// Vue.component("ValidationProvider", ValidationProvider);

import router from './router'
axios.defaults.baseURL = 'http://medhouse.herokuapp.com/api/v1'
axios.defaults.headers.common['medhouse'] = 'medhouse'

axios.interceptors.request.use(config => {
    console.log(config)
    return config
})

axios.interceptors.response.use(res => {
    console.log(res)
    return res
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
