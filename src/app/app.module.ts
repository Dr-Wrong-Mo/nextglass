import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WindowRefService } from './window.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [WindowRefService],
  bootstrap: [AppComponent],
})
export class AppModule {}
