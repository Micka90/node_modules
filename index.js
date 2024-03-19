const cowsay = require("cowsay");
const nameCampus  =  require ( "./information.js" )

console.log (cowsay.say({ 
    text : "Je suis un moooodule " + nameCampus.campus + " " + nameCampus.firstName + " " + nameCampus.secondName ,
    e : "oO" , 
    T : "U" 
} ) ) ;


