import { Component, OnInit, Input  } from '@angular/core';
import { CloudProvider } from '../cloudprovider/cloudprovider';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CloudProviderService } from '../services/cloud-provider.service';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {

@Input() cloudProvider: CloudProvider;

  constructor( private route: ActivatedRoute,
  private cloudProviderService: CloudProviderService,
  private location: Location) { }

 getProvider(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.cloudProviderService.getCloudProvider(id)
    .subscribe(cloudProvider => this.cloudProvider = cloudProvider);
}

goBack(): void {
  this.location.back();
}

  ngOnInit() {
      this.getProvider();
  }

}
