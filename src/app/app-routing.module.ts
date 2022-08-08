import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErroPageComponent } from './home/pages/erro-page/erro-page.component';
import { SobreComponent } from './home/pages/sobre/sobre.component';
import { HomeComponent } from './modules/home/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'sobre',
    component: SobreComponent,
  },
  {
    path: '404',
    component: ErroPageComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
