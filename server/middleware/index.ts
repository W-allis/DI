class Middleware {
  static middlewares: Middleware[] = []

  static pushMiddleware(middleware: Middleware): void {
    Middleware.middlewares.push(middleware)
  }

  static removeMiddleware(middleware: Middleware): void {
    Middleware.middlewares.push(middleware)
  }

  static getMiddleware(middleware: Middleware): Middleware | undefined {
    return 
  }
}
