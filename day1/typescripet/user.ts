class User {
    private name:string;
     
    constructor(name:string){
        this.name = name;
    }
    
    getName():string {
        return this.name;
    }
}

let userObj = new User("Pavan");
console.log(userObj.getName());