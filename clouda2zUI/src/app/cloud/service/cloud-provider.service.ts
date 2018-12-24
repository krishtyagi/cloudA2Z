import { Injectable } from '@angular/core';
import { CloudProvider } from '../cloudprovider/cloudprovider';
import { CLOUDPROVIDERS } from '../cloudprovider/mock-cloudprovider';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CloudProviderService {


    getCloudProvider(id: number): Observable<CloudProvider> {
            return of(CLOUDPROVIDERS.find(cloudProvider => cloudProvider.id === id));
}
    getCloudProviders(): CloudProvider[] {
        return CLOUDPROVIDERS;
    }

    getCloudSponsor(): Observable<CloudProvider[]>
    {     
        return of(CLOUDPROVIDERS);
    }

  constructor() { }
}
