import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloudHomeComponent } from './cloud/cloud-home/cloud-home.component';
import { HomeComponent } from './home/home/home.component';
const routes: Routes = [
{ path: '', redirectTo: '/cloud', pathMatch: 'full'},  
{ path: 'cloud', component: CloudHomeComponent },
{ path: 'home', component: HomeComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
