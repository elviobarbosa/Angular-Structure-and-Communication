;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SigninTypeComponent } from './features/sign-in/signin-type/signin-type.component';

import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SigninIndexComponent } from './features/sign-in/signin-index/signin-index.component';
import { SigninAddressComponent } from './features/sign-in/signin-address/signin-address.component';
import { SinginPersonalComponent } from './features/sign-in/singin-personal/singin-personal.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninTypeComponent,
    SigninIndexComponent,
    SigninAddressComponent,
    SinginPersonalComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
