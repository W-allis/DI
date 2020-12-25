import { Module } from './decorator/module'
import ApiController from '../app/controller/api/foo.api'
import FooRouter from '../app/router/foo.router'

@Module({
  middlewares: [],
  modules: [],
  routers: [FooRouter],
  providers: [],
  controllers: [
    ApiController
  ]
})
export default class AppModule {}
