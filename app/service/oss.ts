import Http from './http'

// @Injectable()
export default class Oss {
  constructor(private http: Http) {}

  upload() {
    this.http.post()
  }
}
