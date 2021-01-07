import { Module } from '../server/decorator/module'
import AppRouter from './app.router';
// import ApiController from '../app/module/controller/api/foo.api'
// import FooRouter from './router/foo.router'

@Module({
  middlewares: [],
  modules: [],
  providers: [],
  routers: [AppRouter],
  controllers: [
    // ApiController
  ]
})
export default class AppModule {}
