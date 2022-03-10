export class Sum {
  public execute (...args: number[]): number {
    return args.reduce((previous, current) => previous + current, 0)
  }
}
