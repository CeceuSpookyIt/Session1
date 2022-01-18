import { Yahtzee, Regra } from "./yahtzee";

describe("Testes Tradutor Numero Romano", () => {
  let _sut: Yahtzee;
  
  beforeEach(() => {
    _sut = new Yahtzee;
  }); 

  it("Deve lançar exceçao quando numero de dados for diferente de 5", () => {
    expect(() => _sut.pontuar([1,2,3,4], Regra.uns)).toThrow();
  });

  
  it("Deve retornar 1 quando a regra escolhida seja uns", () => {
    expect(_sut.pontuar([1,2,3,4,5], Regra.uns)).toBe(1);
  });

  it("Deve retornar a soma de todos os dados com valor igual a 1 quando a regra escolhida seja uns", () => {
    expect(_sut.pontuar([1,2,1,4,1], Regra.uns)).toBe(3);
  });

  it("Deve retornar a soma de todos os dados com valor igual a 2 quando a regra escolhida seja dois", () => {
    expect(_sut.pontuar([1,2,1,2,1], Regra.dois)).toBe(4);
  });

  it("Deve retornar a soma de todos os dados com valor igual a 3 quando a regra escolhida seja tres", () => {
    expect(_sut.pontuar([1,3,1,3,3], Regra.tres)).toBe(9);
  });

  it("Deve retornar a soma de todos os dados com valor igual a 4 quando a regra escolhida seja quatros", () => {
    expect(_sut.pontuar([1,4,3,4,4], Regra.quatros)).toBe(12);
  });

  it("Deve retornar a soma de todos os dados com valor igual a 5 quando a regra escolhida seja cincos", () => {
    expect(_sut.pontuar([5,4,3,5,4], Regra.cincos)).toBe(10);
  });

  it("Deve retornar a soma de todos os dados com valor igual a 6 quando a regra escolhida seja seis", () => {
    expect(_sut.pontuar([5,6,3,6,6], Regra.seis)).toBe(18);
  });

  it("Deve retornar a soma de um par de numeros dentro da combinacao", () => {
    expect(_sut.pontuar([1,2,3,5,5], Regra.par)).toBe(10);
    expect(_sut.pontuar([6,6,3,2,5], Regra.par)).toBe(12);
    expect(_sut.pontuar([6,5,3,2,5], Regra.par)).toBe(10);
    expect(_sut.pontuar([6,5,5,2,5], Regra.par)).toBe(10);
    expect(_sut.pontuar([1,1,1,2,5], Regra.par)).toBe(2);
    expect(_sut.pontuar([6,4,2,2,5], Regra.par)).toBe(4);
    expect(_sut.pontuar([6,5,3,2,3], Regra.par)).toBe(6);
    expect(_sut.pontuar([4,4,4,2,5], Regra.par)).toBe(8);
    expect(_sut.pontuar([4,2,1,3,5], Regra.par)).toBe(0);
  });

  

});