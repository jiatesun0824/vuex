import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/login'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/Main/:ip',
            name: 'Main',
            component: r => require.ensure([], () => r(require('@/components/main'))),
        }
    ]
})