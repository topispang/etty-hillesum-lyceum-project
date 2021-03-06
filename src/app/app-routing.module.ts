import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InputComponent } from './input/input.component';
import { HomeComponent } from './home/home.component';
import { LoopComponent } from './loop/loop.component';
import { SimpleLoopComponent } from './simple-loop/simple-loop.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorExtraComponent } from './calculator-extra/calculator-extra.component';
import { HtmlExample1Component } from './html-example-1/html-example-1.component';
import { HtmlExample2Component } from './html-example-2/html-example-2.component';
import { CssExample1Component } from './css-example-1/css-example-1.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'input', component: InputComponent },
  { path: 'loop', component: LoopComponent },
  { path: 'simple-loop', component: SimpleLoopComponent },
  { path: 'pokemon', component: PokemonComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'calculator-extra', component: CalculatorExtraComponent },
  { path: 'html-example-1', component: HtmlExample1Component },
  { path: 'html-example-2', component: HtmlExample2Component },
  { path: 'css-example-1', component: CssExample1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
