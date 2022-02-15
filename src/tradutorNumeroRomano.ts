export class TradutorNumeroRomano {
  traduzir(numero: number): string {
    let romano: string = "";
    if (numero >= 40) {
      numero = numero - 40;
      romano = romano + "XL";
    }
    while (numero >= 10) {
      numero = numero - 10;
      romano = romano + "X";
    }
    if (numero === 9) {
      return romano + "IX";
    }
    if (numero >= 5) {
      numero = numero - 5;
      romano = romano + "V";
    }
    if (numero === 4) {
      return romano + "IV";
    }
    while (numero > 0) {
      numero = numero - 1;
      romano = romano + "I";
    }
    return romano;
  }
}
