// Numeric Types
let age: number = 25;
let largeNumber: bigint = 9007199254740991n;

// String Type
let name2: string = "John Doe";

// Boolean Type
let isStudent: boolean = true;

// Array Types
let scores: number[] = [85, 90, 95];
let colors: string[] = ["red", "green", "blue"];
let answers: boolean[] = [true, false, true];

// Tuple Type
let person: [string, number] = ["Alice", 30];

// Enum Type
enum Direction {
  North,
  East,
  South,
  West,
}
let currentDirection: Direction = Direction.North;

// Any Type
let randomValue: any = "Hello";

// Void Type
function logMessage(message: string): void {
  console.log(message);
}

// Null and Undefined Types
let emptyValue: null = null;
let notAssigned: undefined = undefined;
