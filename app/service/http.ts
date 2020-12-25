import Injectable from '../../server/decorator/injectable'

@Injectable()
export default class Http {
  post() {
    console.log('i am http post')
  }
}
