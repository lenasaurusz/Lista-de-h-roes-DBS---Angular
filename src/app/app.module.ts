import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counters/counter.module';
import { HeroesModule } from './heroes/hero/heroes.module';
import { DbsModule } from './dbs/dbs.module';

import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    DbsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
