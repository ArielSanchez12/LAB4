//Object
const admin = {
    nameAd: "Kraken",
    id: "Kraken#5304",
    description: "!bug DM",
    email: "kraken04@gmail.com",
    rolesAd: ["Admin", "Explorers", "Kraken"],
    statusAd: "online",
    contacs:["Universe", "Ariel"],
    sendMail (){
        return `send mail to ${this.contacs[0]}`
    }
}

//Acceder al contenido
console.log(admin);
console.log(admin.sendMail());

//Agregar propiedades
admin.hasPFP = true

//Eliminar propiedades
delete admin.description
console.log(admin);

//Desestructuración
const {email,rolesAd,...rest} = admin
console.log(email);
console.log(rolesAd);
console.log(rest);

//Congelar objeto
Object.freeze(admin)
console.log(Object.isFrozen(admin));
admin.hasPFP = false
console.log(admin);

//Sellar objeto
Object.seal(admin)
console.log(Object.isSealed(admin))
admin.hasPFP = false
console.log(admin);

//Duplicar objetos - Clonar objetos
const extraInformation = {
    address:{
        state:"TEXAS",
        telephone:"+1 (786) 152-245-244",
        street:"ELM Street"
    }
}

const allInformation = {...admin,...extraInformation}
console.log(allInformation)

//Métodos
console.log("Obtener las claves:",Object.keys(admin))
console.log("Obtener los valores:",Object.values(admin))
console.log("Obtener las claves y valores en un array:",Object.entries(admin))

