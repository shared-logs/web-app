// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// element-ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// axios
import axios from 'axios'

// add element-ui to vue
Vue.use(Element)

// add axios to the Vue object
Object.defineProperty(Vue.prototype, '$axios', { value: axios })

// create API with baseURL
const api = axios.create({
  baseURL: process.env.API_URL
})

// create API method to get around CORS
api.access = (url) => {
  return new Promise((resolve, reject) => {
    // add baseURL to given url
    url = api.defaults.baseURL + url

    // get yahoo's yql API with url
    api.get('https://query.yahooapis.com/v1/public/yql?q=SELECT * FROM json WHERE url="' + url + '"&format=json')
      .then((response) => {
        response.data = response.data.query.results.json.json
        resolve(response)
      })
      .then(reject)
  })
}

// add api to the Vue object
Object.defineProperty(Vue.prototype, '$api', { value: api })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
