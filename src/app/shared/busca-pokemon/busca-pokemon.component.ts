import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ListarPokemonsService } from 'src/app/services/listar-pokemons.service';

@Component({
  selector: 'app-busca-pokemon',
  templateUrl: './busca-pokemon.component.html',
  styleUrls: ['./busca-pokemon.component.css']
})
export class BuscaPokemonComponent implements OnInit{
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter(); 
  
  constructor (private service: ListarPokemonsService) {}

  ngOnInit(): void {
      
  }

  public buscarPokemon(value: string) {
    this.emmitSearch.emit(value);    
  }
}
