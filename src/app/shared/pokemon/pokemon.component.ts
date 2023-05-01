import { Component, OnInit } from '@angular/core';
import { ListarPokemonsService } from 'src/app/services/listar-pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  constructor(private service: ListarPokemonsService) {}

  public getTodosPokemons: any;

  ngOnInit(): void {
      this.service.apiListarPokemons.subscribe((res) => {
        this.getTodosPokemons = res.results;

        console.log(this.getTodosPokemons);
      })
  }
}
