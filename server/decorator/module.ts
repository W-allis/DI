import { Constructor } from '../types/base.d'
import { Route, Routes } from '../types/router.d'
import { create } from '../utils/create'
import { makeDecorator } from '../utils/decorator'
import { defineMetadata, getMetadata } from '../utils/reflect'

interface ModuleConfig {
  modules?: any[]
  routers?: Constructor[]
  middlewares?: any[]
  providers?: [],
  shedulers?: any[],
  dependencies?: any[],
  controllers?: any[]
}

function generatorRoute(routers: Array<Constructor>) {
  return routers.map((router: Constructor): Constructor => {
    return create(router)
  })
}

export function Module(config: ModuleConfig): ClassDecorator {
  const _handler = (target: Constructor) => {
    defineMetadata('routerModule', config.routers, target)  
  }

  return makeDecorator(_handler) as ClassDecorator
}
