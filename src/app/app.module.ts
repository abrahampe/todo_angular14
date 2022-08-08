import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { SobreComponent } from './home/pages/sobre/sobre.component';
import { ErroPageComponent } from './home/pages/erro-page/erro-page.component';
import { MenuComponent } from './shared/menu/menu.component';

@NgModule({
  declarations: [AppComponent, SobreComponent, ErroPageComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
