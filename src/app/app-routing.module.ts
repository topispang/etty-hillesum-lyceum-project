import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { LoopComponent } from './loop/loop.component';
import { SimpleLoopComponent } from './simple-loop/simple-loop.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorExtraComponent } from './calculator-extra/calculator-extra.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'input', component: InputComponent },
  { path: 'loop', component: LoopComponent },
  { path: 'simple-loop', component: SimpleLoopComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'calculator-extra', component: CalculatorExtraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
