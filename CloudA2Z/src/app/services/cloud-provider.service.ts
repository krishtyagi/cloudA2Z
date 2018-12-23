import { Injectable } from '@angular/core';
import { CloudProvider } from '../cloudprovider/cloudprovider';
import { CLOUDPROVIDERS } from '../cloudprovider/mock-cloudprovider';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';
@Injectable({
    providedIn: 'root'
})
export class CloudProviderService {

    getCloudProviders(): CloudProvider[] {
        return CLOUDPROVIDERS;
    }

    getCloudSponsor(): Observable<CloudProvider[]> {
        this.messagesService.add('Fetching Cloud Providers');
        return of(CLOUDPROVIDERS);
    }

    constructor(private messagesService: MessagesService) { }
}
