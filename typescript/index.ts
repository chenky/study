// function userInfo (name: string, age: number): string {
//   return `name: ${name}, age: ${age}`
// }
// console.log(userInfo('cql', 33))

interface Person {
  name: string;
  age: number;
}

type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number