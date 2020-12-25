import { Constructor } from '../types/base'

const BASEDEPENDENCE = [String, Boolean, Number, Function, RegExp, Object, Array]

export default class DependenceFactory {
  static dependencies: Set<Constructor> = new Set(BASEDEPENDENCE)

  constructor() {}

  static addDependence(dependence: Constructor): void {
    DependenceFactory.dependencies.add(dependence)
  }

  static hasDependence(dependence: Constructor): Boolean {
    return DependenceFactory.dependencies.has(dependence)
    // DependenceFactory.dependencies.has
  }
}
