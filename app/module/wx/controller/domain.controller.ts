import Http from '../../../service/http.service'
import Controller from '../../../../server/decorator/controller'
import { Post } from '../../../../server/decorator/router'
import Wx from '../../../service/wx.service'

@Controller({
  // prefix: '/api'
  middlewares: ['httpLogger']
})
export default class WxDomainController {
  constructor(private foo: Http, private wx: Wx) {

  }

  // @api({
  //   path: '/',
  //   method: ''
  //   middlewares: []
  // })
  @Post({
    url: '/checkDomainHasBanned',
    middlewares: ['httpLogger']
  })
  handleCheckDomainHasHasBanned() {
    this.wx.checkDomainBanned('https://www.yunbtv.com/voddetail/kongbujiao.html').then((res: any) => {
      console.log(res)
    })
  }
}
