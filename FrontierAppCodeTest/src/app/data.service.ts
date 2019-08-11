import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from './account.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // TODO - seperate service to have basic CRUD ops listed
    apiUrl = "https://frontiercodingtests.azurewebsites.net/api/accounts/getall";

    constructor(private _http: HttpClient) { }
    
    getAccounts() {
        return this._http.get<Account[]>(this.apiUrl);
    }
    
}