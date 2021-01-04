import { Constructor } from '../types/base'
import { MiddlewareFn } from '../types/middleware'

class MiddlewareFactory {
  static middlewares: Set<Constructor | { [key: string]: Constructor }> = new Set()

  constructor() {}

  static addMiddleware(middleware: Constructor): void {
    MiddlewareFactory.middlewares.add(middleware)
  }
}
