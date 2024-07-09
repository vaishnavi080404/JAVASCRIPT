const student = {
    name : "Vaishnavi",  // property
    marks:88,
    printMarks : function () {
        console.log("marks =",this.marks);  // student.marks (accessing through this in object )
        
    
    },
};


const employee ={
    calcTax () {
        console.log("Tax is 10%");
    },
    // calctax2 : function () {
    //     console.log("Tax is 10%");  // both r correct way of writing
    // },
    };

    const Karan ={
        salary: 50000,
        
    };

    const Arjun ={
        salary: 50000,
    };

    const karan ={
        salary: 50000,
    };

    const arjun ={
        salary: 50000,
    };


    Karan.__proto__ = employee;
    Arjun.__proto__ = employee;
    karan.__proto__ = employee;
    arjun.__proto__ = employee;


    const Varun ={
        salary: 50000,
        calcTax () {
            console.log("Tax is 20%"); // if object & prototype  have same method , object's method will be used.
        }
    };

    Varun.__proto__ = employee;


    //Classes --When we 've to create similar objects in bulk the we use classes Give blueprint/template to create a object

    class ToyotaCar {
        constructor(brand ,mileage) {
            console.log("creating new object"); // whenever  a new obj is created using new keyword automatically constructor is invoked /excetued & also we can create it by ourseleves too
            this.brand = brand;
            this.mileage =mileage;
        }
        start () {
            console.log("start");

        }

        stop () {
            console.log("stop");
        }

        // setBrand(brand) {
        //     this.brandName = brand ; 
        // }
    }

    let fortuner = new ToyotaCar("fortuner", 10); // new is a keyword to create an ojbect from class
    // fortuner.setBrand("fortuner");
    console.log(fortuner);
    let lexus = new ToyotaCar("lexus",12);
    // lexus.setBrand("lexus");
    console.log(lexus);


    // Inheritance

    // class Parent {
    //     hello () {
    //         console.log("hheelloo");

    //     }
    // };

    // class Child extends Parent {}

    // let obj = new Child();

class Person {
    constructor(name) {
        // console.log("enter parent constructor")
        this.species ="Homosapiens";
        this.name =name;
    }
    eat () {
        console.log("eat");
    }

    sleep () {
        console.log("sleep");
    }

    work () {
        console.log("nothing");
    }
}

class Engineer extends Person {
    constructor(name) {
        // console.log("enter child constructor")
        super(name);  // to invoke parent class constructor
        // this.branch =branch;
        // console.log("exit child constructor");
    }

    work () {           // whenever same function in child and parent then child function is invoked (method overriding)
        super.eat();
        console.log("solve problems , build something");
    }
}

let enggObj= new Engineer("Vaishnavi");



let DATA = "secret information";

class User {
    constructor(name , email){
        this.name =name;
        this.email =email;
    }
    viewData() {
        console.log("VIEWDATA = ", DATA);
    }
}


class Admin extends User {
    constructor(name,email) {
        super(name,email);

    }
    editData() {
        DATA ="some new value";
    }
}

let student1 = new User("abc", "abc@gmail.com");
let student2 = new User("xyz", "xyz@gmail.com");

let teacher1 = new User("Dean","dean@gmail.com");

let admin1 = new Admin("admin", "admin@gamil.com");

