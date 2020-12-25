import DependenceFactory from '../factory/dependencies'
import { Constructor } from '../types/base.d'
import { getParamsType } from './reflect'

export function getDependencies(target: Constructor): Array<Constructor> {
  // getParamsType(target)
  const dependenceies: Array<Constructor> = getParamsType(target)
  // console.log(target, dependenceies)

  return dependenceies || []
}
