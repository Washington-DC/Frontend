import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/views/Search.vue'
import Document from '@/views/Documents'
import ProjectInformation from '@/views/ProjectInformation'
import FileContent from '@/views/FileContent'
import AssociationSubgraph from '@/views/AssociationSubgraph/AssociationSubgraph'
import ServerError from '@/views/error/ServerError.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/', //项目首页
            name: 'Index',
            component: Document,
            props: true
        },
        {
            path: '/Search', //搜索
            name: 'Search',
            component: Search
        },
        {
            path: '/ProjectInformation', //文件详细信息
            component: ProjectInformation,
            name: 'ProjectInformation'
        },
        {
            path: '/filecontent',
            component: FileContent,
            name: 'filecontent'
        },

        {
            path: '/AssociationSubgraph', //关联子图页面
            component: AssociationSubgraph,
            name: 'AssociationSubgraph'
        },
        {
            path: '/servererror',
            component: ServerError,
            name: 'servererror'
        }
    ]
})
