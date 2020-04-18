import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { APIFetchComponent } from './apifetch/apifetch.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'APIFetch', component: APIFetchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
