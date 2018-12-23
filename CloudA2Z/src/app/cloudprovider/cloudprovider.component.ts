import { Component, OnInit } from '@angular/core';
import { CloudProvider } from './cloudprovider';
import { CLOUDPROVIDERS } from './mock-cloudprovider';
import { CloudProviderService } from '../services/cloud-provider.service';


@Component({
    selector: 'app-cloudprovider',
    templateUrl: './cloudprovider.component.html',
    styleUrls: ['./cloudprovider.component.css']
})
export class CloudproviderComponent implements OnInit {


    cloudProviders: CloudProvider[];
    selectedProvider: CloudProvider;

    getCloudProviders(): void {
       // this.cloudProviders = this.cloudProviderService.getCloudProviders();
       this.getCloudSponsors();
    }


   
    onSelect(cloudProvider: CloudProvider): void {
        this.selectedProvider = cloudProvider;
    }

    constructor(private cloudProviderService: CloudProviderService) { }

    ngOnInit() {
        this.getCloudProviders();
    }



    getCloudSponsors(): void {
        console.log("Async method");
        
  this.cloudProviderService.getCloudSponsor()
      .subscribe(cloudProviders => this.cloudProviders = cloudProviders);
}
}
