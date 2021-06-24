import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RandomNamesComponent } from './random-names/random-names.component';
import { RandomNamesService } from './random-names/random-names.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RandomNamesComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule
  ],
  providers: [RandomNamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
