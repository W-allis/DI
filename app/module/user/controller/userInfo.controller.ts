import Http from '../../../service/http.service'
import Controller from '../../../../server/decorator/controller'
import { Post } from '../../../../server/decorator/router'

@Controller({
  middlewares: ['httpLogger']
})
export default class UserInfoController {
  constructor(private foo: Http) {

  }

  @Post({
    url: '/update',
    middlewares: ['httpLogger']
  })
  handleUpdate() {

  }
}
