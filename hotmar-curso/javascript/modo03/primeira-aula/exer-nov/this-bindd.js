
function speakGeneric(){
    console.log(this.sound);
}


let dog = {
    sound: "Au Au",
    fala:speakGeneric
}

let cat = {
    sound: "Miau",
    fala:speakGeneric
}



speakGeneric()
let ola = speakGeneric.bind(dog)

ola()