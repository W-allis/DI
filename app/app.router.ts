import Router from '../server/decorator/router'
import { Route, Routes } from '../server/types/router.d'
import UserModule from './module/user/user.module'

const routes: Routes = [
  { path: '/user', redirectTo: '', module: UserModule },
  // { path: '/wx', module: UserModule }
]

@Router({
  routes
})
export default class AppRouter {}