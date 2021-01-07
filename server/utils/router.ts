import { config } from 'process'
import { Constructor } from '../types/base.d'
import { Routes, Route, _Route, _Routes } from '../types/router.d'
import { getMetadata } from './reflect'

// export function setRouterModule(routers: Constructor[]): _Routes {
//   return routers.map((router: Constructor): _Route => {
//     const { module, controller, ...config } = router
//     if (module) {
//       config.children = getMetadata('routes', module)
//     }
    
//     if (controller) {
//       config.children = getMetadata('routes', controller)
//     }
//   })
// }
// todo创建route  class比较好
export function getRouter(router: Constructor): _Routes {
  const routes = getMetadata('routes', router)
  return routes.map((route: Route) => {
    const { module, controller, ...config } = route

    if (module) {
      config.children = getModuleRouter(module)
    }
    
    if (controller) {
      config.children = getMetadata('routes', controller)
    }

    return { ...config }
  })
}

// todo 提前生成好对应的routes
export function getModuleRouter(module: Constructor): _Routes {
  const routers = getMetadata('routerModule', module) || []
  return routers.reduce((main: _Routes, router: Constructor): _Routes => {
    // const { module, controller, ...config } = router
    return main.concat(getRouter(router))
  }, [])
}
