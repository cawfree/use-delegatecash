export function isNonEmptyString(e: any): boolean {
  return typeof e === 'string' && !!e.length;
}
