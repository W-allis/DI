import AppModule from './app.module'
import App from './app'

App.run({
  port: '3000'
}).bootstrapModule(AppModule)
