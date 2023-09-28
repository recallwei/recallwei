export const getObjectKeys = Object.keys as <T extends object>(
  object: T
) => (keyof T)[]
