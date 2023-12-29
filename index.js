class Student {
    constructor(name, age, gpa) {
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    
    study() {
        console.log(`${this.name} is studying!`);
    }
}

const stud1 = new Student("spongebob", 19, 4.0);
console.log(stud1.gpa);