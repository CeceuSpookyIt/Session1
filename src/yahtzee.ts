export enum Regra {
  uns,
  dois,
  tres,
  quatros,
  cincos,
  seis,
  par,
  doisPares,
  trio,
  quadra,
  sequenciaMenor,
  sequenciaMaior,
  fullHouse,
  yahtzee,
  chance,
}

export class Yahtzee {
  pontuar(dados: number[], regra: Regra): number {
    if (dados.length != 5) {
      throw new Error("Número de dados diferente de 5!");
    }

    let simples = [0, 0, 0, 0, 0, 0].map((valorDaPosicao, index) =>
      dados
        .filter((dadoDaPosicao) => dadoDaPosicao === index + 1)
        .reduce((soma, valorCorrent) => soma + valorCorrent, 0)
    );

    const regrasSimples = (valorDoDado: number): number =>
      simples[valorDoDado - 1];

    const encontrarNumerosRepetidos = (vezes: number, exclusao: number = 0): number => {
      for (let index = 6; index >= 1; index--) {
        if (index !== exclusao && simples[index - 1] >= index * vezes) {
          return index;
        }
      }
      return 0;
    };

    const encontrarGrupoDeNumeros = (param1: number, param2: number) => {
      if (encontrarNumerosRepetidos(param1) !== 0 && encontrarNumerosRepetidos(param2, encontrarNumerosRepetidos(param1)) !== 0) {
        return encontrarNumerosRepetidos(param1) * param1 + encontrarNumerosRepetidos(param2, encontrarNumerosRepetidos(param1)) * param2;
      }
      return 0;
    };

    const somarSequencia = (vetor: number[]) => {
      if (
        simples.length === vetor.length &&
        vetor.every((x, i) => x === simples[i])
      ) {
        return simples.reduce((soma, valorCorrente) => soma + valorCorrente, 0);
      }
      return 0;
    }

    const  conjuntoDeRegras = {
      [Regra.uns]: regrasSimples(1),
      [Regra.dois]: regrasSimples(2),
      [Regra.tres]: regrasSimples(3),
      [Regra.quatros]: regrasSimples(4),
      [Regra.cincos]: regrasSimples(5),
      [Regra.seis]: regrasSimples(6),
      [Regra.par]: encontrarNumerosRepetidos(2) * 2,
      [Regra.trio]: encontrarNumerosRepetidos(3) * 3,
      [Regra.quadra]: encontrarNumerosRepetidos(4) * 4,
      [Regra.doisPares]: encontrarGrupoDeNumeros(2, 2),
      [Regra.fullHouse]: encontrarGrupoDeNumeros(3, 2),
      [Regra.yahtzee]: encontrarNumerosRepetidos(5) !== 0 ? 50 : 0,
      [Regra.sequenciaMenor] : somarSequencia([1,2,3,4,5,0]),
      [Regra.sequenciaMaior] : somarSequencia([0,2,3,4,5,6]),
      [Regra.chance] : simples.reduce((soma, valorCorrente) => soma + valorCorrente, 0)
    };

    return conjuntoDeRegras[regra];
    
  }
}
