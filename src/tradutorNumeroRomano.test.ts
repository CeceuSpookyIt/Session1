import { TradutorNumeroRomano } from "./tradutorNumeroRomano";

describe("Traduzir numeros de arabe para romano", () => {
  let _sut: TradutorNumeroRomano;
  
  beforeEach(() => {
    _sut = new TradutorNumeroRomano();
  }); 
  
  it("Deve retornar I quando parametro igual a 1", () => {
    expect(_sut.traduzir(1)).toBe("I");
  });

  it("Deve retornar II quando parametro igual a 2", () => {
    expect(_sut.traduzir(2)).toBe("II");
  });

  it("Deve retornar III quando parametro igual a 3", () => {
    expect(_sut.traduzir(3)).toBe("III");
  });

  it("Deve retornar IV quando parametro igual a 4", () => {
    expect(_sut.traduzir(4)).toBe("IV");
  });

  it("Deve retornar V quando parametro igual a 5", () => {
    expect(_sut.traduzir(5)).toBe("V");
  });

  it("Deve retornar VI, VII e VIII quando parametro igual a 6, 7 e 8 consecutivamente", () => {
    expect(_sut.traduzir(6)).toBe("VI");
    expect(_sut.traduzir(7)).toBe("VII");
    expect(_sut.traduzir(8)).toBe("VIII");
  });

  it("Deve retornar IX quando parametro igual a 9", () => {
    expect(_sut.traduzir(9)).toBe("IX");
  });

  it("Deve retornar X quando parametro igual a 10", () => {
    expect(_sut.traduzir(10)).toBe("X");
  });


  it("Deve retornar XI, XII e XIII quando parametro igual a 11, 12 e 13 consecutivamente", () => {
    expect(_sut.traduzir(11)).toBe("XI");
    expect(_sut.traduzir(12)).toBe("XII");
    expect(_sut.traduzir(13)).toBe("XIII");
  });

  it("Deve retornar XIV quando parametro igual a 14", () => {
    expect(_sut.traduzir(14)).toBe("XIV");
  });

  it("Deve retornar XV quando parametro igual a 15", () => {
    expect(_sut.traduzir(15)).toBe("XV");
  });

  it("Deve retornar XIX quando parametro igual a 19", () => {
    expect(_sut.traduzir(19)).toBe("XIX");
  });

  it("Deve retornar XX quando parametro igual a 20", () => {
    expect(_sut.traduzir(20)).toBe("XX");
  });

  it("Deve retornar XL quando parametro igual a 40", () => {
    expect(_sut.traduzir(40)).toBe("XL");
  });

  it("Deve retornar XLVII quando parametro igual a 47", () => {
    expect(_sut.traduzir(47)).toBe("XLVII");
  });



});