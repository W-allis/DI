import { InjectableConfig } from '../types/injectable.d'
import { makeDecorator } from '../utils/decorator'
// import { getDependencies } from '../utils/dependencies'
import { Constructor } from '../types/base'
import DependenceFactory from '../factory/dependencies'


export default function Injectable(config?: InjectableConfig): ClassDecorator {
  const _handler = (target: Constructor) => {
    // console.log(target)
    DependenceFactory.addDependence(target)
  }

  return makeDecorator(_handler) as ClassDecorator
}