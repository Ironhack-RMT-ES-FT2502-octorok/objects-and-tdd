console.log("probando")


/* 

{
  nombreDePropiedad: valorDePropiedad,
  nombreDePropiedad: valorDePropiedad,
  nombreDePropiedad: valorDePropiedad,
  nombreDePropiedad: valorDePropiedad,
  key: value,
}

*/


const virtualPet = {
  name: "Pepe",
  isHappy: true,
  volumen: 80,
  lenguajes: ["spanish", "english", "german"],
  productCode: {
    number: "$HFSDS$W$",
    serial: "//$HFHSDFH/%/%&"
  },
  color: "brown",
  owner: "Alex",
  "1cloth": "shirt",
  "favourite cloth": "hat"
}

console.log(virtualPet)

// notación de punto
console.log(virtualPet.name)
console.log(virtualPet.lenguajes[ 0 ])
console.log(virtualPet.lenguajes[ virtualPet.lenguajes.length - 1 ])
console.log(virtualPet.productCode.number)

// notación de corchetes
console.log(virtualPet["1cloth"])
console.log(virtualPet["name"])
console.log(virtualPet["lenguajes"][0])


let nombreDePropiedad = "color"

console.log(virtualPet[nombreDePropiedad])


// modificar y borrar propiedades de objeto

// actualizar propiedad
virtualPet.color = "azul"

// agregar propiedad
virtualPet.toy = "flauta"

// borrar propiedades
delete virtualPet.volumen
console.log(virtualPet)

// Analizar Objetos

// listar todas las propiedades como un array
console.log( Object.keys(virtualPet) )


// como iterar sobre un objeto (for in)

for ( let key in virtualPet ) {

  // let nombreDePropiedad = "isHappy"

  console.log("nombre de propiedad", key)
  console.log("valor de propiedad", virtualPet[key])

}




// Metodos

const virtualPet2 = {
  name: "Paco",
  isHappy: true,
  favouriteFoods: ["fish", "carrot", "apple", "patatas"],
  saludar() {
    //console.log(this) // this apunta al objeto que está llamando esta palabra
    return `${this.name} saluda y dice hola!`
  },
  changeMood() {
    this.isHappy = false
    return `${this.name} ahora está triste, necesita una cerveza :(`
  },
  feedRandomfood() {

    // buscar una comida aleatoria del array
    let randomNum = Math.random() * this.favouriteFoods.length // 0 . 3.9999
    let randomIndex = Math.floor(randomNum)
    
    // 0, 1, 2, 3
    let randomFood = this.favouriteFoods[randomIndex]
    console.log(randomFood)

    return `${this.name} se está comiendo un ${randomFood}`
    // hacer un mensajito donde se le da esa comida

  }
}

console.log( virtualPet2.saludar() )
virtualPet2.name = "Paquito"
console.log( virtualPet2.saludar() )

console.log( virtualPet2.changeMood() )

console.log( virtualPet2.feedRandomfood() )




// Estructura de datos

const users = [
  {
    username: "John",
    age: 30,
    occupation: "web dev",
  },
  {
    username: "Axel",
    age: 37,
    occupation: "diseñador",
  },
  {
    username: "Luis",
    age: 28,
    occupation: "data",
  }
]

console.log( users[0].username )

// modicar la edad de Axel a ser 38
users[1].age = 38

// modificar la edad de Luis, restandole 1 a la edad.
let nuevaEdad = users[2].age
users[2].age = nuevaEdad - 1

// users[2].age -= 1
// users[2].age--

console.log(users)

// que pasa si lo quiero agregar un nuevo usuario. "Jack" 41 ciber
let newUser = {
  username: "Jack",
  age: 41,
  occupation: "ciber"
}

// console.log(users, newUser)

users.push( newUser )

console.log(users)