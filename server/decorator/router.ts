import { PathConfig, RouterConfig } from '../types/router.d'
import { makeDecorator } from '../utils/decorator'
import { Constructor } from '../types/base.d'
import { PostFactory } from '../factory/router'


export default function Router(config: RouterConfig): ClassDecorator {
  const _handler = (target: Constructor) => {
    // console.log(target)
    Reflect.defineMetadata('routes', config.routes, target)
  }

  return makeDecorator(_handler) as ClassDecorator
}

// export function get(pathConfig) {

// }

export function Post(pathConfig: PathConfig): MethodDecorator {
  const _handler = (target: Constructor, key: symbol | string, descriptor: PropertyDescriptorMap) => {
    // console.log(target)
    Reflect.defineMetadata('method', 'POST', descriptor.value)
    Reflect.defineMetadata('url', pathConfig.url, descriptor.value)
  }

  return makeDecorator(_handler) as MethodDecorator
}