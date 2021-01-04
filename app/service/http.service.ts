const { request }  = require('http')

import Injectable from '../../server/decorator/injectable'

@Injectable()
export default class Http {
  post(url: string) {
    console.log('i am http post -------')
    return new Promise((resolve, reject) => {
      // post(url)
    })
  }

  get() {

  }
}
