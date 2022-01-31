import { Player } from "./player";
import { Game } from "./game";
import exp from "constants";

describe("Game", () => {
  let _sut: Game;
  let j1EC: jest.SpyInstance;
  let j2EC: jest.SpyInstance;
  let j1CC: jest.SpyInstance;

  beforeEach(() => {
    const p1 = new Player("Player 1");
    const p2 = new Player("Player 2");

    j1EC = jest.spyOn(p1, 'embaralharCartas');
    j2EC = jest.spyOn(p2, 'embaralharCartas');

    j1CC = jest.spyOn(p1, 'comprarCarta');
    // j2CC = jest.spyOn(p2, 'comprarCarta');

    _sut = new Game(p1, p2);
  });

  afterEach(() => {
    j1EC.mockClear();
    j2EC.mockClear();
  })

  it("Deve haver dois jogadores em uma partida", () => {
    expect(_sut.jogador1).not.toBe(undefined);
    expect(_sut.jogador2).not.toBe(undefined);
  });

  it("cada jogador comeca com 3 cartas", () => {
    expect(_sut.jogador1.deck.length).toBe(17);
    expect(_sut.jogador1.mao.length).toBe(3);

    expect(_sut.jogador2.deck.length).toBe(17);
    expect(_sut.jogador2.mao.length).toBe(3);
  });

  it("Deve embaralhar as cartas no comeco do jogo", () => {
    expect(j1EC).toBeCalledTimes(1);
    expect(j2EC).toBeCalledTimes(1);
  });

  it("Deve adicionar 1 de espaco mana no inicio do turno do jogador", () => {
    const slotIni = _sut.jogador1.manaSlot;

    _sut.comecarTurno();

    expect(_sut.jogador1.manaSlot).toBe(slotIni + 1);
  });

  it("Deve limitar o espaco de mana a 10", () => {
    _sut.jogador1.manaSlot = 10;

    _sut.comecarTurno();

    expect(_sut.jogador1.manaSlot).toBe(10);
  });

  it("Deve disponibilizar toda a mana", () => {
    _sut.jogador1.manaSlot = 2;

    _sut.comecarTurno();

    expect(_sut.jogador1.mana).toBe(3);
  });

  it("O jogador 1 deve comprar uma carta", () => {
    j1CC.mockClear();

    _sut.comecarTurno();

    expect(j1CC).toBeCalledTimes(1);
  });

  // it("O jogador 1 deve comprar uma carta", () => {
  //   _sut.jogador1.manaSlot = 2;
  //   _sut.jogador2.vida = 15;
  //   j1CC.mockImplementationOnce(() => {
  //     _sut.jogador1.mao = [3,3,3];
  //   })
    
  //   _sut.comecarTurno();

  //   expect(_sut.jogador2.vida).toBe(12);
  // });



});