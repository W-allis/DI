import Router from '../../../server/decorator/router'
import { Routes } from '../../../server/types/router'
import UserInfoController from './controller/userInfo.controller'
import UserOperatorController from './controller/userOperator.controller'

const routes: Routes = [
  { path: '/userInfo', controller: UserInfoController },
  { path: '/operator', controller: UserOperatorController }
]

@Router({
  routes
})
export default class UserRouter {}
