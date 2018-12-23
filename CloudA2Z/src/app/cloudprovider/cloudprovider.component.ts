import { Component, OnInit } from '@angular/core';
import { CloudProvider } from './cloudprovider';
import { CLOUDPROVIDERS } from './mock-cloudprovider';
@Component({
  selector: 'app-cloudprovider',
  templateUrl: './cloudprovider.component.html',
  styleUrls: ['./cloudprovider.component.css']
})
export class CloudproviderComponent implements OnInit {

    cloudProviders = CLOUDPROVIDERS;
// cloudProvider: CloudProvider = {id: 1, marketRank: 1, marketShare: 50, shortName: 'AWS', provider: 'Amazon Web Services'};

 selectedProvider: CloudProvider;
onSelect(cloudProvider: CloudProvider): void {
  this.selectedProvider = cloudProvider;
}
  constructor() { }

  ngOnInit() {
  }

}
