import { TradutorNumeroRomano } from "./tradutorNumeroRomano";

describe("Testes Tradutor Numero Romano", () => {
  let _sut: TradutorNumeroRomano;
  
  beforeEach(() => {
    _sut = new TradutorNumeroRomano;
  }); 
  
  it("Deve retornar I quando parametro igual a 1", () => {
    expect(_sut.traduzir(1)).toBe("I");
  });

});