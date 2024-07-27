export enum NodeEnvironment {
  Production = 'prod',
  Development = 'dev',
  Test = 'test',
}

enum Env {
  DEV = 'dev',
  PROD = 'prod'
}

export function getEnvironment(): string{
  const nodeEnv = process.env.NODE_ENV?.toLowerCase() || Env.DEV;
  
  switch (nodeEnv) {
    case Env.PROD:
      return Env.PROD
    case Env.DEV:
    default:
      return Env.DEV
  }
}
