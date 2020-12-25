import DependenceFactory from '../factory/dependencies'
import { Constructor } from '../types/base.d'
import { getDependencies } from './dependencies'

export function create<T>(constructor: Constructor): T {
  const dependencies: Array<Constructor> = getDependencies(constructor)

  const paramInstances = dependencies.map(dependence => {
    if (constructor === dependence) {
      throw 'injectable can not dependence self'
    }
    if (!DependenceFactory.hasDependence(dependence)) {
      throw `does not have ${dependence.name} dependence`
    }
    return create(dependence)
  })

  return Reflect.construct(constructor, paramInstances)
}
