import { TestBed } from '@angular/core/testing';

import { ListarPokemonsService } from './listar-pokemons.service';

describe('ListarPokemonsService', () => {
  let service: ListarPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
