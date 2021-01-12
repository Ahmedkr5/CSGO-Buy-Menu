import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './Core/header/header.component';
import { FooterComponent } from './Core/footer/footer.component';
import { GunsComponent } from './guns/guns.component';
import {HttpClientModule} from '@angular/common/http';
import { GunComponent } from './gun/gun.component';
import { AddGunFormComponent } from './add-gun-form/add-gun-form.component';
import { ReactiveFormGunComponent } from './reactive-form-gun/reactive-form-gun.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GunsComponent,
    GunComponent,
    AddGunFormComponent,
    ReactiveFormGunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
