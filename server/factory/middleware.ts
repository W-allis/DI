import { MiddlewareFn } from '../types/middleware'

class MiddlewareFactory {
  public handler: MiddlewareFn

  constructor(handler: MiddlewareFn) {
    this.handler = handler
  }
}
