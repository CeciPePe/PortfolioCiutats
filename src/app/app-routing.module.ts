import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import {AboutComponent} from './components/pages/about/about.component';
import {BusquedaComponent} from './components/pages/busqueda/busqueda.component';
import {ItemComponent} from './components/pages/item/item.component';
import {PortfolioComponent} from './components/pages/portfolio/portfolio.component';

const routes: Routes = [
{path:'portfolio', component: PortfolioComponent},
{path:'about', component: AboutComponent},
{path:'item/:cod', component: ItemComponent},
{path: 'buscar/:textoBusq', component: BusquedaComponent},
{path: '**', component: PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
