import type { App } from 'vue'
import { createStore } from 'vuex'
import AppStore from './module/app'
const store = createStore({
  modules: {
    AppStore
  }
})
export function setupStore(app:  App<Element>) {
  app.use(store)
}