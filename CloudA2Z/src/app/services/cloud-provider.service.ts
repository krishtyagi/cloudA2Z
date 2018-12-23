import { Injectable } from '@angular/core';
import { CloudProvider } from '../cloudprovider/cloudprovider';
import { CLOUDPROVIDERS } from '../cloudprovider/mock-cloudprovider';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
@Injectable({
    providedIn: 'root'
})
export class CloudProviderService {


    getCloudProvider(id: number): Observable<CloudProvider> {
  // TODO: send the message _after_ fetching the hero
  this.messagesService.add(`CloudService: fetched cloud sponsore id=${id}`);
  return of(CLOUDPROVIDERS.find(cloudProvider => cloudProvider.id === id));
}
    getCloudProviders(): CloudProvider[] {
        return CLOUDPROVIDERS;
    }

    getCloudSponsor(): Observable<CloudProvider[]> {
        this.messagesService.add('Fetching Cloud Providers');
        return of(CLOUDPROVIDERS);
    }

    constructor(private messagesService: MessagesService) { }
}
