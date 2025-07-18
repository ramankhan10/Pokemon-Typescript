import { Pokemon } from "./pokemon";

export class Trainer {
  public name: string;
  private pokemons: Pokemon[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public catchPokemon(pokemon: Pokemon): void {
    this.pokemons.push(pokemon);
    console.log(`${this.name} Pokemon ${pokemon.getName()}ra gereft `);
  }

  public getActivePokemon(): Pokemon {
    //The first Pokémon that has not yet been defeated.
    return this.pokemons.find((p) => !p.isFainted())!;
  }


}
