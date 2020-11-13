import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountInfoComponent } from './components/account-info/account-info.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './components/error-page/error-page.component'

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'account/:id', component: AccountInfoComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'error/:id', component: ErrorPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
