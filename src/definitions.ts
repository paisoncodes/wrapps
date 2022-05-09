export interface WrappsPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
