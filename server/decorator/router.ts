import { PathConfig, RouterConfig } from '../types/router.d'
import { makeDecorator } from '../utils/decorator'
import { Constructor } from '../types/base.d'
import { defineMetadata, getMetadata } from '../utils/reflect'

export default function Router(config: RouterConfig): ClassDecorator {
  const _handler = (target: Constructor) => {
    defineMetadata('routes', config.routes, target)
  }

  return makeDecorator(_handler) as ClassDecorator
}

export function Post(pathConfig: PathConfig): MethodDecorator {
  const _handler = (target: Constructor, key: symbol | string, descriptor: PropertyDescriptorMap) => {
    // defineMetadata('routes')
    const routes = getMetadata('routes', target)
    const instance = { method: 'post', url: pathConfig.url, handler: descriptor.value }

    if (routes) {
      defineMetadata('routes', routes.concat([instance]), target)
    } else {
      defineMetadata('routes', [instance], target)
    }
  }

  return makeDecorator(_handler) as MethodDecorator
}
