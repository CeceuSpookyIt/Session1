import { Mines } from "./mines";

//input mineSolver(3, 3, [
// ["*",".","."],
// [".",".","*"],
// [".",".","."],
//])
// [
// ["*","2","1"],
// ["1","2","*"],
// ["0","1","1"],
// ]

describe("Testes mine solver", () => {
  let _sut: Mines;

  beforeEach(() => {
    _sut = new Mines();
  });

  it("Deve retornar solucao vazia quando input for vazio", () => {
    expect(_sut.mineSolver(0, 0, [])).toEqual([]);
  });

  it("Deve lançar uma excecao quando o parametro lines for diferente do numero de linhas", () => {
    expect(() =>
      _sut.mineSolver(3, 2, [
        [".", "."],
        [".", "*"],
      ])
    ).toThrow();
  });

  it("Deve lançar uma excecao quando o parametro col for diferente do numero de colunas", () => {
    expect(() => _sut.mineSolver(2, 2, [[".", "."], ["."]])).toThrow();
  });

  it("Deve retornar * quando o meu problema for *", () => {
    expect(_sut.mineSolver(1, 1, [["*"]])).toEqual([["*"]]);
  });

  it("Deve retornar [[*],[1]] quando meu problema for [[*], [.]]", () => {
    expect(_sut.mineSolver(2, 1, [["*"], ["."]])).toEqual([["*"], ["1"]]);
  });

  it("Deve retornar [[1],[*]] quando meu problema for [[.], [*]]", () => {
    expect(_sut.mineSolver(1, 2, [[".", "*"]])).toEqual([["1", "*"]]);
  });

  //1,*,1
  it("Deve retornar [1, *, 1] quando meu problema for [., *, .]", () => {
    expect(_sut.mineSolver(1, 3, [[".", "*", "."]])).toEqual([["1", "*", "1"]]);
  });
  it("Deve retornar [*, 2, *] quando meu problema for [*, ., *]", () => {
    expect(_sut.mineSolver(1, 3, [["*", ".", "*"]])).toEqual([["*", "2", "*"]]); 
  });
  
  it("Deve retornar o número de bombas na diagonal", () => {
    expect(_sut.mineSolver(3, 3, [
      ["*",".","."],
      [".",".","."],
      [".",".","*"],
    ])).toEqual([
      ["*","1","0"],
      ["1","2","1"],
      ["0","1","*"],
    ]);
  });

  it("Deve retornar o número de bombas na diagonal", () => {
      expect(_sut.mineSolver(3, 3, [
        [".",".","*"],
        [".",".","."],
        ["*",".","."],
      ])).toEqual([
        ["0","1","*"],
        ["1","2","1"],
        ["*","1","0"],
  
      ]); 
  });

  it("Deve retornar o número de bombas na diagonal", () => {
    expect(_sut.mineSolver(5, 5, [
      [".",".","*",".","."],
      [".",".",".","*","*"],
      ["*",".",".",".","."],
      [".",".",".",".","."],
      [".",".",".",".","."],
    ])).toEqual([
      ["0","1","*","3","2"],
      ["1","2","2","*","*"],
      ["*","1","1","2","2"],
      ["1","1","0","0","0"],
      ["0","0","0","0","0"],

    ]); 
  });

  it("Deve retornar o número de bombas na diagonal", () => {
    expect(_sut.mineSolver(5, 5, [
      [".",".","*",".","."],
      [".","*","*","*","*"],
      ["*","*",".","*","."],
      [".","*","*","*","."],
      [".",".",".",".","."],
    ])).toEqual([
      ["1","3","*","4","2"],
      ["3","*","*","*","*"],
      ["*","*","8","*","4"],
      ["3","*","*","*","2"],
      ["1","2","3","2","1"],

    ]); 
  });
  it("Deve retornar o número de bombas na diagonal", () => {
    expect(_sut.mineSolver(5, 5, [
      [".",".","*",".","."],
      [".","*","*","*","*"],
      ["*","*",".","*","."],
      [".","*","*","*","*"],
      [".",".",".","*","."],
    ])).toEqual([
      ["1","3","*","4","2"],
      ["3","*","*","*","*"],
      ["*","*","8","*","5"],
      ["3","*","*","*","*"],
      ["1","2","4","*","3"],

    ]); 
  });
});
