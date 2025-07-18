import { Trainer } from "./Trainer";

export class Battle {
  private trainer1: Trainer;
  private trainer2: Trainer;

  constructor(trainer1: Trainer, trainer2: Trainer) {
    this.trainer1 = trainer1;
    this.trainer2 = trainer2;
  }

  public start() {
    console.log(
      `fight between ${this.trainer1.name} and ${this.trainer2.name} Started...`
    );

    let activePokemon1 = this.trainer1.getActivePokemon();
    let activePokemon2 = this.trainer2.getActivePokemon();

    let turn = 1;

    while (activePokemon1.isFainted() && activePokemon2.isFainted()) {
      console.log(`\n--- Round ${turn}---`);
      if (turn % 2 !== 0) {
        activePokemon1.attack(activePokemon2);
      } else {
        activePokemon2.attack(activePokemon1);
      }
      turn++;
    }

    const winner = activePokemon1.isFainted()
      ? this.trainer2.name
      : this.trainer1.name;
    console.log(`The Winner is ${winner} 🏆`);
  }
}
