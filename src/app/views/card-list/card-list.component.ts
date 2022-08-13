import { Component, OnInit } from '@angular/core';
import { PokemonShortData } from 'src/app/interfaces/pokemon';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit {
  public list: PokemonShortData[] = [];
  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAll.subscribe((res) => {
      this.list = res;
      console.log(res);
    });
  }
}
