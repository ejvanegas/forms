import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecksComponent } from './components/checks/checks.component';
import { RadiosComponent } from './components/radios/radios.component';
import { ListControlComponent } from './components/list-control/list-control.component';

@NgModule({
  declarations: [AppComponent, ChecksComponent, RadiosComponent, ListControlComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
