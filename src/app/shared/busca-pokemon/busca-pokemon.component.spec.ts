import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPokemonComponent } from './busca-pokemon.component';

describe('BuscaPokemonComponent', () => {
  let component: BuscaPokemonComponent;
  let fixture: ComponentFixture<BuscaPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
