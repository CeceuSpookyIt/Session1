import exp from "constants";
import { resourceLimits } from "worker_threads";
import { TradutorNumeroRomano } from "./tradutorNumeroRomano";

describe("Testes Tradutor Numero Romano", () => {
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

  it("Deve retornar V + I, V + II, V + III quando parametro entre 6 e 8 ", () => {
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

  it("Deve retornar X + I, X + II, X + III quando parametro entre 11 e 13 ", () => {
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


  it("Deve retornar XLI quando parametro igual a 41", () => {
    expect(_sut.traduzir(41)).toBe("XLI");
  });

  it("Deve retornar L quando parametro igual a 50", () => {
    expect(_sut.traduzir(50)).toBe("L");
  });

//-----



});