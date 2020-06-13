import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './testtag/test.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './common/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
