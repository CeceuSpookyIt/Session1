export enum Regra {
  uns,
  dois,
  tres,
  quatros,
  cincos,
  seis,
  par,
}

export class Yahtzee {
  pontuar(dados: number[], regra: Regra): number {
    if (dados.length != 5) {
      throw new Error("Número de dados diferente de 5!");
    }
    let simples = [0, 0, 0, 0, 0, 0];

    for (let dado = 0; dado < 5; dado++) {
      for (let index = 1; index <= 6; index++) {
        if (dados[dado] === index) {
          simples[index - 1] += index;
        }
      }
    }

    if (regra === Regra.dois) {
      return simples[1];
    }
    if (regra === Regra.tres) {
      return simples[2];
    }
    if (regra === Regra.quatros) {
      return simples[3];
    }
    if (regra === Regra.cincos) {
      return simples[4];
    }
    if (regra === Regra.seis) {
      return simples[5];
    }
    if (regra === Regra.uns) {
      return simples[0];
    }
    if (regra === Regra.par) {
      for (let index = 6; index >= 0; index--) {
        if (simples[index - 1] >= index * 2) {
          return index * 2;
        }
      }
    }
    return 0;
  }
}
