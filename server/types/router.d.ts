export interface Route {
  path: string,
  controller: Constructor,
  children?: Array<Route>,
  redirectTo?: string,
  meta?: Object,
  cache?: Boolean
}

export type Routes = Array<Route>

export interface RouterConfig {
  routes: Routes | Array<Route>,
  // mode?: string,
  // baseUrl?: string,
  beforeEach?: () => any,
  afterEach?: () => any
}

export interface PathConfig {
  beforeRouteEnter?: () => any
  afterRouteEnter?: () => any
  url: string,
  headers?: {
    contentType?: string
  }
}
