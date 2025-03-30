
let name = {
    firstName: "Bhushan",
    lastName: "Chouhan",

    
}
let printFullName = function () {
        console.log(this.firstName + " " + this.lastName);
}
printFullName.call(name);

let name2 = {
    firstName: "Kkashi",
    lastName: " Chouhan",
}

//function borrowing 
//name.printFullName.call(name2);
printFullName.call(name2);