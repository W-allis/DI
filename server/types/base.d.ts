export interface BaseConfig {
  inject?: string = 'root'
}

export type Constructor<T = any> = new (...args: any[]) => T

export type Middlewares = Array<Constructor|string>
