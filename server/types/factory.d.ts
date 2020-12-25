export abstract class Factory {
  static abstract factories: Map<any, any>
  static abstract get(): any
  static abstract set(factory: any): void 
}
