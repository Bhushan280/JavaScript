class Singleton{
    constructor() {
        // if (Singleton.instance) {
        //     return Singleton.instance;
        // }
        this.value = Math.random();
        Singleton.instance = this;

    }
}

const Obj1 = new Singleton();
const Obj2 = new Singleton();


console.log(Obj1.value);
console.log(Obj2.value);