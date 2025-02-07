console.log("probando")

function centsToDecimals( cents ) {
  if (cents === undefined) {
    return 0
  }

  if (typeof cents !== "number") {
    return undefined
  }

  let euros = cents / 100
  return euros
}

// tests

console.log("1. deberia convertir el valor en centimos a euros float")
console.log( centsToDecimals(100) === 1 )
console.log( centsToDecimals(1250) === 12.5 )
console.log( centsToDecimals(10) === 0.1 )
console.log( centsToDecimals(0) === 0 )
console.log( centsToDecimals(-30) === -0.3 )

console.log("2. deberia retornar undefined si el argumento no es de tipo numero")
console.log( centsToDecimals("hola") === undefined )
console.log( centsToDecimals(true) === undefined )

console.log("3. deberia retornar 0 si no se recibe ningun valor")
console.log( centsToDecimals() === 0 )


