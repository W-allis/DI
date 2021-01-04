import { create } from './utils/create'
import { Constructor } from './types/base.d'
import { Routes } from './types/router.d'

const { createServer } = require('http')
const { get } = require('https')
const cheerio = require('cheerio')

interface BootStrapModule {
  bootstrapModule(module: any): Promise<any>
}

function matchRouter(type: string, url: string, routes: Routes) {
  let handler: Function
  for (let i = 0, l = routes.length; i < l; i++) {
    const reg = new RegExp(routes[i].path)

    if (url.match(reg)) {
      const controllerInstance = create(routes[i].controller)
      const methodsNames = Object.getOwnPropertyNames(Object.getPrototypeOf(controllerInstance))
        .filter((item: string | symbol) => item !== 'constructor' && (<any>controllerInstance)[item] instanceof Function) 
      methodsNames.forEach(method => {
        // if (method)
        const fn = (<any>controllerInstance)[method]

        const _method = Reflect.getMetadata('method', fn)
        const _url = Reflect.getMetadata('url', fn)
        // console.log(_method, type, routes[i].path + _url, url)
        if (_method === type && routes[i].path + _url === url) {
          handler = function() {
            (<any>controllerInstance)[method]()
          }
        }
      })
    }
  }

  return function() {
    handler()
  }
}

function _createServer(options: any) {
  const server = createServer((request: Request, response: Response) => {
    const handler = matchRouter(request.method, request.url, options.routes)
    handler()
  })
  server.listen(3000, function() {
    console.log('i am listen at 3000')
  })
  return server
}

function _pushController(url: string) {
  // if () {

  // }  
}

export default class App {
  static run(config: any): BootStrapModule {
    
    return {
      bootstrapModule(module: any): Promise<any> {
        // server.
        const routers = Reflect.getMetadata('routers', module)
        const routes = routers.map((router: any) => Reflect.getMetadata('routes', router)).flat()
        // console.log(routes)
        const server = _createServer({
          routes
        })
        
        return new Promise((resolve, reject) => {
          resolve()
        })
      }
    }
  }
}
