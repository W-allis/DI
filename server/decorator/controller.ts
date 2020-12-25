import { ControllerConfig } from '../types/controller.d'
import { makeDecorator } from '../utils/decorator'
import { getDependencies } from '../utils/dependencies'
import { Constructor } from '../types/base'


export default function Controller(config?: ControllerConfig): ClassDecorator {
  const _handler = (target: Constructor) => {
    // console.log(target)
    getDependencies(target)
  }

  return makeDecorator(_handler) as ClassDecorator
}