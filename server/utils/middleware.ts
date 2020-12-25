import { MiddlewareFactoryConstructor, MiddlewareFn } from '../types/middleware.d'

// 添加middleware，并且添加注解
export function makeMiddleware(handler: MiddlewareFn): MiddlewareFactoryConstructor {
  // return new MiddlewareFactory(handler)
  return {} as MiddlewareFactoryConstructor
}
