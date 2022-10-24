import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import AboutVue from '../views/AboutVuetify.vue'
import AboutApi from '../views/AboutCompApi.vue'
import CalcArea from '../views/CalculateArea.vue'
import Axios from '../views/Axios.vue'
import QApp from '../views/QuizApp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: 
    [
        {
            path: '/Dashboard',
            name: 'dasboard',
            component: HomeView
          },
          {
            path: '/stringApp',
            name: 'StringAppView',
            component: StringAppView
          },
          {
            path: '/basicMath',
            name: 'basicMath',
            component: BasicMathView
          },
          {
            path: '/aboutvue',
            name: 'aboutVue',
            component: AboutVue
          },
          {
            path: '/aboutapi',
            name: 'aboutApi',
            component: AboutApi
          },
          {
            path: '/calarea',
            name: 'calArea',
            component: CalcArea
          },
          {
            path: '/axios',
            name: 'Axios',
            component: Axios
          },
          {
            path: '/quiz',
            name: 'Qapp',
            component: QApp
          },


    ]
})
export default router