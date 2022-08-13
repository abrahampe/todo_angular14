import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { PokemonList, PokemonShortData } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
  constructor(private http: HttpClient) {}

  get apiListAll(): Observable<Array<PokemonShortData>> {
    return this.http
      .get<PokemonList>(this.url)
      .pipe(map((res) => res?.results));

    //   (res) => res );
  }
}
