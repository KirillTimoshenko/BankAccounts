import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountItemComponent } from './components/account-item/account-item.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddAccountComponent } from './components/add-account/add-account.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './components/error-page/error-page.component';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    AccountItemComponent,
    AboutPageComponent,
    HeaderComponent,
    PageNotFoundComponent,
    AddAccountComponent,
    AccountInfoComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
