import AppModule from './app.module'
import App from '../server/app'

App.run({
  port: '3000',
  // 全局中间件
  middlewares: []
}).bootstrapModule(AppModule)
