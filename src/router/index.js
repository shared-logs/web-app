import Vue from 'vue'
import Router from 'vue-router'

import DeviceList from '@/components/DeviceList'
import Device from '@/components/Device'
import Logs from '@/components/Logs'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DeviceList',
      component: DeviceList
    },
    {
      path: '/device/:id',
      name: 'Device',
      component: Device
    },
    {
      path: '/device/:deviceid/logs/:logid',
      name: 'Logs',
      component: Logs
    }
  ]
})
