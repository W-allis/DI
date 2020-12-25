import 'reflect-metadata'
import { Constructor } from '../types/base'

export function getParamsType(target: Constructor) {
  return Reflect.getMetadata('design:paramtypes', target)
}

