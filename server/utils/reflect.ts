import 'reflect-metadata'
import { Constructor } from '../types/base'

export function getParamsType(target: Constructor) {
  return Reflect.getMetadata('design:paramtypes', target)
}

export function defineMetadata(key: symbol | string, value: any, target: any): void {
  Reflect.defineMetadata(key, value, target)
}

export function getMetadata(key: symbol | string, target: any): any {
  return Reflect.getMetadata(key, target)
}
