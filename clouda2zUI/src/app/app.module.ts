import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { HomeComponent } from './home/home/home.component';
import { NavigationComponent } from './home/navigation/navigation.component';
import { CloudHomeComponent } from './cloud/cloud-home/cloud-home.component';
import { AppRoutingModule } from './app-routing.module';
import { CloudproviderComponent } from './cloud/cloudprovider/cloudprovider.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ProviderDetailsComponent } from './cloud/provider-details/provider-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    NavigationComponent,
    CloudHomeComponent,
    CloudproviderComponent,
    ProviderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
