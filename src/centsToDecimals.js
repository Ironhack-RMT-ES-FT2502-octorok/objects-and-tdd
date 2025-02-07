function centsToDecimals(cents) {

  if (cents === undefined) {
    return 0
  }

  if (typeof cents !== "number") {
    return undefined
  }

  let total = cents / 100
  return total

}