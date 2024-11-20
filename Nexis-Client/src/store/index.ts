import {store} from 'quasar/wrappers'
import {InjectionKey} from 'vue'
import {Router} from 'vue-router'
import {createStore, Store as VuexStore, useStore as vuexUseStore} from 'vuex'
import auth from './module-auth'
import type {AuthStateInterface} from './module-auth/state'

// import example from './module-auth'
// import { ExampleStateInterface } from './module-auth/state';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export interface StateInterface {
  auth: AuthStateInterface
}

// provide typings for `this.$store`
declare module 'vue' {
  interface ComponentCustomProperties {
    $store: VuexStore<StateInterface>
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<StateInterface>> = Symbol('vuex-key')

// Provide typings for `this.$router` inside Vuex stores
declare module 'vuex' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  export interface Store<S> {
    readonly $router: Router;
  }
}

export default store(function (/* { ssrContext } */) {
  return createStore<StateInterface>({
    modules: {
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING
  })
})

export function useStore () {
  return vuexUseStore(storeKey)
}
