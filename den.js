class Person {
    sayName () {
        console.log(`My name is ${this.name}`)
        
    }
}
class YourbaPerson extends person {
    constructor (name){
        super()
        this.name = name
    }
}

const ade = new YourbaPerson("Ade")
ade.sayName()