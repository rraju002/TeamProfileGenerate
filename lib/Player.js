//importing Coach constructor 
const Coach = require("./Coach");

//player constructor extends coach constructor 
class Player extends Coach {
    constructor (name, position, height, weight, hometown ) {
        //calling coach constructor 
        super (name, position,)

        this.height = height;
        this.weight = weight;
        this.hometown = hometown;

        //returning height, weight and hometown from input 
        getHeight()
         {
            return this.height;
        }
    }
        getWeight ()    
        {
            return this.weight;
        }
        getHometown()
        {
            return this.hometown;
        }
        //override Coach role to Player
    getRole () {
        return "Player";
    }
}
//export 
module.exports = Player;