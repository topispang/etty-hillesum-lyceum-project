import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { LoopComponent } from './loop/loop.component';
import { SimpleLoopComponent } from './simple-loop/simple-loop.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorExtraComponent } from './calculator-extra/calculator-extra.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HomeComponent,
    InputComponent,
    LoopComponent,
    SimpleLoopComponent,
    PokemonComponent,
    CalculatorComponent,
    CalculatorExtraComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
