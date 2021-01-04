import { Constructor, Middlewares } from './base'

export interface ControllerConfig extends BaseConfig {
  prefix?: string,
  middlewares?: Middlewares
}