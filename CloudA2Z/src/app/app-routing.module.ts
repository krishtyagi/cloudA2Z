import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudproviderComponent } from './cloudprovider/cloudprovider.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProviderDetailsComponent } from './provider-details/provider-details.component';
const routes: Routes = [
{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},    
{ path: 'cloudProvider', component: CloudproviderComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'detail/:id', component: ProviderDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
