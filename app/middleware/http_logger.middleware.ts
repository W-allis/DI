import Middleware from '../../server/decorator/middleware'
import { Hooks } from '../../server/types/hooks'

@Middleware({
  name: 'httpLogger'
})
class HttpLoggerMiddleware implements Hooks {
  constructor() {}

  beforeRouter(ctx: any) {
  }

  afterRouter(ctx: any) {
  }
}

export default HttpLoggerMiddleware
