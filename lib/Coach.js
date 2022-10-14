//Coach constructor
class Coach {
    constructor (name, position, email) {
      this.name = name;
      this.position = position;
      this.email = email  
    }

    //Return coach's name from input 
    getName () {
        return this.name;
    }

    //Returning coach's position
    getPosition () {
        return this.position;

    }

    //Returning coach's email from input
    getEmail () {
        return this.email
    }
};
//export
module.exports = Coach;