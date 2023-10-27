import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharaterComponent } from './components/add-charater/add-charater.component';


@NgModule({
  exports: [
    MainPageComponent,
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharaterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbsModule { }
