import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateLaptopComponent } from './create-laptop/create-laptop.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { UpdateLaptopComponent } from './update-laptop/update-laptop.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    CreateLaptopComponent,
    LaptopListComponent,
    UpdateLaptopComponent,
    LaptopDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
