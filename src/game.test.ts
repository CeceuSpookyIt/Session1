import { Player } from "./player";
import { Game } from "./game";

describe("Game", () => {
  let _sut: Game;
  let j1EC: jest.SpyInstance;
  let j2EC: jest.SpyInstance;
  let j1CC: jest.SpyInstance;
  let j1Atacar: jest.SpyInstance;

  beforeEach(() => {
    const p1 = new Player("Player 1");
    const p2 = new Player("Player 2");

    j1EC = jest.spyOn(p1, "embaralharCartas");
    j2EC = jest.spyOn(p2, "embaralharCartas");

    j1CC = jest.spyOn(p1, "comprarCarta");
    // j2CC = jest.spyOn(p2, 'comprarCarta');

    j1Atacar = jest.spyOn(p1, "atacar").mockReturnValue(3);

    _sut = new Game(p1, p2);
  });

  afterEach(() => {
    j1EC.mockClear();
    j2EC.mockClear();
  });

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

    _sut.rodarTurno();

    expect(_sut.jogador1.manaSlot).toBe(slotIni + 1);
  });

  it("Deve limitar o espaco de mana a 10", () => {
    _sut.jogador1.manaSlot = 10;

    _sut.rodarTurno();

    expect(_sut.jogador1.manaSlot).toBe(10);
  });

  it("Deve disponibilizar toda a mana no inicio do turno", () => {
    _sut.jogador1.manaSlot = 2;

    _sut.rodarTurno();

    expect(_sut.jogador1.mana).toBe(3);
  });

  it("O jogador 1 deve comprar uma carta", () => {
    j1CC.mockClear();

    _sut.rodarTurno();

    expect(j1CC).toBeCalledTimes(1);
  });

  it("Deve aplicar o dano do jogador 1 no jogador 2", () => {
    _sut.jogador1.manaSlot = 2;
    _sut.jogador1.mao = [3];
    j1Atacar.mockImplementation(() => {
      _sut.jogador1.mana -= 3;
      return 3;
    })

    _sut.rodarTurno();

    expect(_sut.jogador2.vida).toBe(27);
  });

  it("Deve finalizar o jogo se o jogador2 tenha morrido", () => {
    _sut.jogador1.manaSlot = 2;
    _sut.jogador1.mao = [3];
    _sut.jogador2.vida = 2;
   

    _sut.rodarTurno();

    expect(_sut.rodarTurno()).toBe("Player 1");
  });

  it("Deve dar a possibilidade de atacar enquanto o jogador 1 tiver mana", () => {
    _sut.jogador1.manaSlot = 5;
    _sut.jogador1.mao = [3, 3];
    j1Atacar.mockImplementation(() => {
      _sut.jogador1.mana -= 3;
      return 3;
    });
    console.log("test");
    _sut.rodarTurno();

    expect(j1Atacar).toBeCalledTimes(2);
  });
});
