import { Player } from "./player";
export class Game {
    jogador1: Player;
    jogador2: Player;
    constructor(jogador1: Player, jogador2: Player) {
        this.jogador1 = jogador1;
        this.jogador2 = jogador2;

        jogador1.embaralharCartas();
        jogador2.embaralharCartas();

        for (let compra = 0; compra < 3; compra++) {
            jogador1.comprarCarta();
            jogador2.comprarCarta();
        }
    }
    comecarTurno() {
        if(this.jogador1.manaSlot < 10){
            this.jogador1.manaSlot++;
        }
        this.jogador1.mana = this.jogador1.manaSlot;
        this.jogador1.comprarCarta();    
    }
}
