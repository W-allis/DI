import querystring from 'querystring'
import Injectable from '../../server/decorator/injectable'
import Http from './http.service'
const { post, get }  = require('https')

const config = {
  appid: 'wx93f4cdece0bc1368',
  secret: '61eb29e61c5536eca5abb00953c80bda',
  grant_type: 'client_credential'
}

@Injectable()
export default class Wx {
  constructor(private http: Http) {

  }

  getAccessToken() {
    let url = `https://api.weixin.qq.com/cgi-bin/token?${querystring.stringify(config)}`
    console.log(get(url))
    // return this.http.post()
    return get(url)
  }

  createShortUrl(req_url: string) {
    return this.getAccessToken().then((token: string) => {
      const url = `https://api.weixin.qq.com/cgi-bin/shorturl?access_token=${token}`

      return post(url, {
        'access_token': token,
        'action': 'long2short',
        'long_url': req_url
      }, {
        json: true,
        headers: {
          'content-type': 'application-json'
        }
      })
    })
  }

  checkDomainBanned(url: string) {
    return this.createShortUrl(url).then((_url: string) => {
      get(_url).then((res: any) => {
        console.log(res)
      })
    })
  }
}