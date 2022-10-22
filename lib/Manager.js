//import Coach constructor
const Coach = require("./Coach");

//manager constructor extends coach constructor 
class Manager extends Coach {
    constructor (name, position, email, year) {
        //call employee constructor 
        super (name, position, email);

        this.year = year;
    }
    //returning year from input 
    getYear () {
        return this.year

    }

    //override Coach role to Manager
    getRole () {
        return "Manager";
    }
}

//export
module.exports = Manager;
