import { Component, OnInit, Input  } from '@angular/core';
import { CloudProvider } from '../cloudprovider/cloudprovider';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {

@Input() cloudProvider: CloudProvider;

  constructor() { }

  ngOnInit() {
  }

}
