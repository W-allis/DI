export abstract class Hooks {
  abstract beforeRouter(ctx): void
  abstract afterRouter(ctx): void
}