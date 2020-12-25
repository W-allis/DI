import Middleware from '../../server/decorator/middleware'
import { Hooks } from '../../server/types/hooks'
import Http from '../service/http'

@Middleware()
class HttpLoggerMiddleware implements Hooks {
  constructor(public http: Http) {}

  beforeRouterEach() {
    this.http.post()
  }

  afterRouterEach() {
    this.http.post()
  }
}

export default HttpLoggerMiddleware
