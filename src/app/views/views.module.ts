import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared/shared.module';
import { CardListComponent } from './card-list/card-list.component';
@NgModule({
  declarations: [HomeComponent, DetailsComponent, CardListComponent],
  imports: [CommonModule, SharedModule],
})
export class ViewsModule {}
