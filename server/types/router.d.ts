import { Constructor, Middlewares } from './base'

export interface Route {
  path: string,
  children?: Array<Route>,
  redirectTo?: string,
  meta?: Object,
  cache?: Boolean,
  controller?: Constructor,
  module?: Constructor
}

export interface _Route {
  path: string,
  children?: Array<Route>,
  redirectTo?: string,
  meta?: Object,
  cache?: Boolean
}

export type _Routes = Array<_Route>

export type Routes = Array<Route>

export interface RouterConfig {
  routes: Routes | Array<Route>,
  // mode?: string,
  // baseUrl?: string,
  beforeEach?: () => any,
  afterEach?: () => any
}

export interface PathConfig {
  url: string,
  middlewares?: Middlewares,
  headers?: {
    contentType?: string
  }
}
