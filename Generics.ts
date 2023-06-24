class Box<T>{
 private value: T;
 
 constructor(value: T) {
    this.value = value;
 }   
 public getValue(): T {
    return this.value;
 }
 setValue(value: T): void {
    this.value = value;
 }
}

const numberBox = new Box<number>(1);
console.log(numberBox.getValue());

const stringBox = new Box<string>("Hello");
console.log(stringBox.getValue());

const booleanBox = new Box<boolean>(true);
console.log(booleanBox.getValue());