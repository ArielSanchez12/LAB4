//Array
let moderators = [

    {
        name: "CHELLSEY",
        status: "Do Not Disturb",
        roles: ["Moderator", "Warrior"]
    },

    {
        name: "MaiaPlays",
        status: "Idle",
        roles: ["Moderator", "Ninja"]
    },

    {
        name: "Mikogami",
        status: "Online",
        roles: ["Moderator", "Wizard", "BetaTester"]
    }
]

//Acceder al contenido - Desestructuración
const [name,status,roles] = moderators
console.log(moderators[2].status);


//Recorrido
for (let i = 0; i < moderators.length; i++) {
    console.log(moderators[i]);
}


moderators.forEach(moderator => {
    console.log(moderator);
});

moderators.map(moderator => {
    console.log(moderator);
});

//Métodos - sort
console.log(moderators[2].roles.sort());

//Rest Operator
const [val1,...rest] = moderators
console.log(val1)
console.log(rest)