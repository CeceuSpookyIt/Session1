export class Mines {
  mineSolver(lines: number, cols: number, mines: string[][]): string[][] {
    if (mines.length !== lines) {
      throw new Error("Error");
    }

    if (!mines.map((linha) => linha.length).every((col) => col === cols)) {
      throw new Error("Error");
    }

    for (let linha = 0; linha < lines; linha++) {
      for (let coluna = 0; coluna < cols; coluna++) {
        if (mines[linha][coluna] === ".") {
          let bomb = 0;

          for (let variacaolinha = -1; variacaolinha <= 1; variacaolinha++) {
            for (
              let variacaocoluna = -1;
              variacaocoluna <= 1;
              variacaocoluna++
            ) {
              if (mines[linha + variacaolinha]) {
                if (
                  mines[linha + variacaolinha][coluna + variacaocoluna] === "*"
                ) {
                  bomb++;
                }
              }
            }
          }

          mines[linha][coluna] = bomb.toString();
        }
      }
    }
    return mines;
  }
}
