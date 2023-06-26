
class Person {
    name: String;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person { 
    empCode: number;

    constructor(empCode: number, name:string) {
        super(name);
        
        this.empCode = empCode; 
    }
    displayName():void {
        console.log("Name = " + this.name + ", Employee Code = " + this.empCode); 
    }

}
let emp = new Employee(100, "Bill");
emp.displayName();
