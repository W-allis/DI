import { Constructor } from '../types/base'
import { DecoratorFn, Handler, _Classes } from '../types/decorator.d'

export function makeDecorator (handler: any): DecoratorFn {
  const _decorator: DecoratorFn = (target: Object, key?: string | symbol, description?: TypedPropertyDescriptor<any>) => {
    handler(target, key, description)
  }

  return _decorator
}
