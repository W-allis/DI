import { Constructor } from '../types/base'

export default class DependenceFactory {
  static dependencies: Array<any>

  constructor() {}

  static addDependence(dependence: DependenceFactory): void {
    DependenceFactory.dependencies.push(dependence)
  }

  static getDependence() {

  }
}
