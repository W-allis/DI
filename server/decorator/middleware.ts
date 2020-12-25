import { Handler, _Classes } from '../types/decorator.d'
import { MiddlewareConfig } from '../types/middleware.d'
import { makeDecorator } from '../utils/decorator'


export default function Middleware(config?: MiddlewareConfig): ClassDecorator {
  const _handler = (target: _Classes) => {
    // console.log(target)
    // get
    Reflect.defineProperty(target, 'run', {
      get() {
        return function() {
          
        }
      }
    })
  }

  return makeDecorator(_handler) as ClassDecorator
}
