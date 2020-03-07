import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegendsComponent } from './legends/legends.component';
import { FormsModule } from '@angular/forms';
import { LegendDetailComponent } from './legend-detail/legend-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendsComponent,
    LegendDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
