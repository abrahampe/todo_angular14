import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import {
  PokemonData,
  PokemonList,
  PokemonShortData,
} from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
  constructor(private http: HttpClient) {}
const lista = [];
  get apiListAll(): Observable<Array<PokemonData>> {
    return this.http
      .get<PokemonList>(this.url)
      .pipe(map((res) => res?.results.map((rs) => {
        return this.apiGetOne(rs.url).subscribe(
         res =>res.status =
       )
      })



      ));

    //   (res) => res );
  }

  public apiGetOne(url: string): Observable<PokemonData> {
    return this.http.get<PokemonData>(url).pipe((res) => res);
  }
}
