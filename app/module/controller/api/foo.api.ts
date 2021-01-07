import Http from '../../../service/http.service'
import Controller from '../../../../server/decorator/controller'
import { Post } from '../../../../server/decorator/router'
import Wx from '../../../service/wx.service'

@Controller({
  // prefix: '/api'
  middlewares: ['httpLogger']
})
export default class FooController {
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
    // console.log('i am get userInfo')
    // return new Promise(function (resolve, reject) {
    //     return http.(url, function(err, res, body) {
    //         if (!err) {
    //             if (res && res.request && res.request.uri && res.request.uri.host === 'weixin110.qq.com') {
    //                 resolve({ code: -1, msg: 'banned' });
    //             } else {
    //                 resolve({ code: 0, msg: 'ok' });
    //             }
    //         } else {
    //             reject(err);
    //         }
    //     })
    // })
  }
}
