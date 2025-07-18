import { Pokemon } from "./pokemon";
import { FirePokemon } from "./FirePokemon";

//Pokemon
const pikachu = new Pokemon("Pikachu", "Electric", 100, 25);
const charmander = new Pokemon("Charmander", "Fire", 110, 20);
pikachu.attack(charmander);

//FirePokemon
const flareon = new FirePokemon("Flareon", 130, 30);
const squirtle = new Pokemon("Squirtle", "Water", 120, 18);

flareon.attack(squirtle); // This method is inherited from the parent class
flareon.flamethrower(squirtle); // This is its own method
