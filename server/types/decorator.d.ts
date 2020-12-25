export interface _Classes {
  new (...params: any[]): _Classes
}

export interface Handler {
  (target): void
  (target: Object, key?: string | symbol): void
  (target: Object, key?: string | symbol, description?: PropertyDescriptorMap): void
}


export type DecoratorFn = MethodDecorator | ParameterDecorator | ClassDecorator | PropertyDecorator
