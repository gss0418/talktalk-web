import Vue from 'vue'
import App from './App.vue'
import './assets/styles/global.scss'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

document.documentElement.style.fontSize = "100px"

new Vue({
    el: '#app',
    components: { App },
    template: '<App/>'
})
