export type PokemonType = "Fire" | "Water" | "Grass" | "Electric";

export class Pokemon {
  private name!: string;
  private type!: PokemonType;
  private hp!: number;
  private maxHp!: number;
  public attackPower!: number;

  constructor(
    name: string,
    type: PokemonType,
    hp: number,
    attackPower: number
  ) {
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.attackPower = attackPower;
  }

  //public Attak method

  public attack(target: Pokemon): void {
    console.log(`${this.name} to ${target.getName()} attack!`);
    target.takeDamage(this.attackPower);
  }

  //The method of disadvantages
  public takeDamage(damage: number): void {
    this.hp -= damage;
    if (this.hp < 0) {
      this.hp = 0;
    }
    console.log(`${this.name} ${damage} was injured and Now ${this.hp}`);
  }

  //method Getter To access information

  public getName(): string {
    return this.name;
  }

  public getHp(): number {
    return this.hp;
  }

  public isFainted(): boolean {
    return this.hp <= 0;
  }
}
