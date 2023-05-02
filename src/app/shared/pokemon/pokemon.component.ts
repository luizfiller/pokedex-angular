import { Component, OnInit } from '@angular/core';
import { ListarPokemonsService } from 'src/app/services/listar-pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  constructor(private service: ListarPokemonsService) {}

  private setTodosPokemons: any;
  public getTodosPokemons: any;

  ngOnInit(): void {
      this.service.apiListarPokemons.subscribe((res) => {
        this.setTodosPokemons = res.results;
        this.getTodosPokemons = this.setTodosPokemons;

        // console.log(this.getTodosPokemons);
      })
  }

  public buscar(value: string) {
    const filtro = this.setTodosPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    })

    this.getTodosPokemons = filtro;
  }
}
