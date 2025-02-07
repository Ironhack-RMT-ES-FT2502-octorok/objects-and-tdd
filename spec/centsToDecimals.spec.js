describe("function centsToDecimals", function() {

  it("1. debe convertir los centimos a euros", function() {
    expect(centsToDecimals(100)).toBe(1)
    expect(centsToDecimals(1250)).toBe(12.5)
    expect(centsToDecimals(10)).toBe(0.1)
    expect(centsToDecimals(0)).toBe(0)
    expect(centsToDecimals(-30)).toBe(-0.3)
  })

  it("2. deberia retornar undefined si el argumento no es de tipo numero", function() {
    expect(centsToDecimals("hola")).toBe(undefined)
    expect(centsToDecimals(true)).toBe(undefined)
  })

  it("3. deberia retornar 0 si no se recibe ningun valor", function() {
    expect(centsToDecimals()).toBe(0)
  })

})