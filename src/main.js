import { createApp } from 'vue'
import App from './App.vue'

/* import the icons core */
import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    iconfont: 'mdi',
  }
})

import router from './router';


createApp(App).use(router).use(vuetify).mount('#app')
