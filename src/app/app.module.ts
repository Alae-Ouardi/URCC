import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ReposDataService } from './services/repos-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [
    ReposDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
