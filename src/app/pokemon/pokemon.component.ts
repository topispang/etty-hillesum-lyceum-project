import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-app',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
})
export class PokemonComponent {
  pokemon: string;
  pokemonPlaatje: string;

  updatePokemon() {
    this.pokemonPlaatje =
      'https://serebii.net/pokemon/art/' + this.pokemon + '.png';
  }
}
