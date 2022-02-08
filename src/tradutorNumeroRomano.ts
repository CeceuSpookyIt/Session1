import { V4MAPPED } from "dns";
import { umask } from "process";

export class TradutorNumeroRomano {
  
  traduzir(numero: number) : string {
    let resultado: string = "";
    
    if (numero >= 50) {
      resultado = resultado + "L"
      numero = numero - 50;   
    }

    if (numero >= 40 ) {
      resultado = "XL";
      numero = numero - 40;
    }

    while (numero >= 10) {
      resultado = resultado + "X";
      numero = numero - 10;
    }


    if (numero >= 9 ) {
      resultado = resultado + "IX";
      numero = numero - 9;
    }

    if (numero >= 5) {
      resultado = resultado + "V"
      numero = numero - 5;   
    }

    if (numero >= 4) {
      resultado = resultado + "IV";
      numero = numero - 4;      
    }
    
    while (numero > 0) {
      resultado = resultado + "I";
      numero = numero - 1;
    }
    
    return resultado;
  }

};