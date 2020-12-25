import Http from '../../service/http'
import Controller from '../../../server/decorator/controller'
import { Post } from '../../../server/decorator/router'

@Controller({
  // prefix: '/api'
  // middlewares: []
})
export default class FooController {
  constructor(private http: Http, private String: string) {

  }

  // @api({
  //   path: '/',
  //   method: ''
  //   middlewares: []
  // })
  @Post({
    url: '/getUserInfo'
  })
  handleGetUserInfo() {
    // console.log('i am get userInfo')
    this.http.post()
  }
}
