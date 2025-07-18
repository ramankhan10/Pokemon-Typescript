import { Pokemon } from "./pokemon";
import { FirePokemon } from "./FirePokemon";
import { Battle } from "./Battle";
import { Trainer } from "./Trainer";

// //Pokemon
// const pikachu = new Pokemon("Pikachu", "Electric", 100, 25);
// const charmander = new Pokemon("Charmander", "Fire", 110, 20);
// pikachu.attack(charmander);

// //FirePokemon
// const flareon = new FirePokemon("Flareon", 130, 30);
// const squirtle = new Pokemon("Squirtle", "Water", 120, 18);

// flareon.attack(squirtle); // This method is inherited from the parent class
// flareon.flamethrower(squirtle); // This is its own method

const coach1 = new Trainer("Dima");
const coach2 = new Trainer("Sasha");

coach1.catchPokemon(new FirePokemon("Charizard", 180, 40));
coach2.catchPokemon(new Pokemon("Starmie", "Water", 150, 35));

const battle = new Battle(coach1, coach2);
battle.start();
