import { Constructor } from '../types/base.d'
import { makeDecorator } from '../utils/decorator'

interface ModuleConfig {
  routers?: any[]
  modules?: any[]
  middlewares?: any[]
  providers?: any[],
  dependencies?: any[],
  controllers?: any[]
}

function setController() {

}

export function Module(config: ModuleConfig): ClassDecorator {
  const _handler = (target: Constructor) => {
    Reflect.defineMetadata('controllers', config.controllers, target)
    Reflect.defineMetadata('routers', config.routers, target)
  }

  return makeDecorator(_handler) as ClassDecorator
}
