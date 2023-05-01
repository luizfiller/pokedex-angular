import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ListarPokemonsService {
  private readonly url: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  get apiListarPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.buscarPokemonPorNome(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });

        console.log(res);
      })
    );
  }

  public buscarPokemonPorNome(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res: any) => res));
  }
}
