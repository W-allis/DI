import { Module } from '../../../server/decorator/module'
import UserInfoController from './controller/userInfo.controller'
import UserRouter from './user.router'

@Module({
  routers: [UserRouter],
  controllers: [UserInfoController]
})
export default class UserModule {}
