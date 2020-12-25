import { Constructor } from '../types/base'
// import { Factory } from '../types/factory'

// abstract class Factory {
//   static factories: Map<any, any>
//   static get(): any {}
//   static set(factory: any): void {} 
// }

export default class ControllerFactory {
  static controllers: Set<Constructor> = new Set()

  constructor() {}

  static addController(dependence: Constructor): void {
    ControllerFactory.controllers.add(dependence)
  }

  static getController(params: any) {
    // return ControllerFactory.controllers.get(params)
  }
}
