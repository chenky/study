type ReturnType1<T> = T extends (
  ...args: any[]
) => infer R ? R : any;