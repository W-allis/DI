import Router from '../../server/decorator/router'
import { Routes } from '../../server/types/router'
import FooController from '../controller/api/foo.api'

const routes: Routes = [
  // { path: '', controller: FooController, redirectTo: '/login', meta: {} },
  { path: '/user', controller: FooController, cache: true }
]

@Router({
 routes
})
export default class FooRouter {}
