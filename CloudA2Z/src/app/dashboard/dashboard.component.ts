import { Component, OnInit } from '@angular/core';
import { CloudProvider } from '../cloudprovider/cloudprovider';
import { CloudProviderService } from '../services/cloud-provider.service';
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    cloudProviders: CloudProvider[];
    constructor(private cloudProviderService: CloudProviderService) { }
    ngOnInit() {
        this.getCloudProviders();
    }
    getCloudProviders(): void {

        this.cloudProviderService.getCloudSponsor()
            .subscribe(cloudProviders => this.cloudProviders = cloudProviders.slice(0, 4));
    }
}
