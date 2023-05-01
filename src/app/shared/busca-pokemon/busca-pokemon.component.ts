import { Component } from '@angular/core';
import { ListarPokemonsService } from 'src/app/services/listar-pokemons.service';

@Component({
  selector: 'app-busca-pokemon',
  templateUrl: './busca-pokemon.component.html',
  styleUrls: ['./busca-pokemon.component.css']
})
export class BuscaPokemonComponent {
  constructor (private service: ListarPokemonsService) {}

  
}
