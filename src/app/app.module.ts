import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModuloprincipalModule } from './moduloprincipal/moduloprincipal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ModuloprincipalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
