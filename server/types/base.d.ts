export interface BaseConfig {
  inject?: string = 'root'
}

export type Constructor<T = any> = new (...args: any[]) => T
