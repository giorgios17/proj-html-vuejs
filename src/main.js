import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { faJs, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import "@fontsource/lora"
import "@fontsource/bebas-neue"
import "@fontsource/work-sans"
Vue.config.productionTip = false
library.add(fas)
library.add(far)
library.add(fab)
library.add(faJs, faVuejs)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
