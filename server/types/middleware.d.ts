/// <reference path="base.d.ts" />

export interface MiddlewareFn {
  (target: ClassDecorator, key: string | symbol, description: PropertyDescriptorMap): void
  (options?: any): (target: ClassDecorator, key: string | symbol, description: PropertyDescriptorMap) => void
}

export interface Middleware {

}

export interface MiddlewareConfig extends BaseConfig {

}

export interface MiddlewareFactoryConstructor {
  handler: MiddlewareFn
  new (config: any): Middleware
}
