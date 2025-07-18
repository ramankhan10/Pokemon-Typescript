import { Pokemon } from "./pokemon";

export class FirePokemon extends Pokemon {
  constructor(name: string, hp: number, attackPower: number) {
    super(name, "Fire", hp, attackPower);
  }

  public flamethrower(target: Pokemon): void {
    console.log(`${this.getName()}  Uses flamethrower movement!`);

    // best power
    const damage = this.attackPower * 1.5;
    target.takeDamage(damage);
  }
}
