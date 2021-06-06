import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Party} from '../Model/party'
import {CParty} from '../Model/crearparty';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PartyService{
    API_URL= "http://localhost:3000/api/party";
    partys: Party[] | undefined;
    party: CParty[] | undefined;
    constructor(private http: HttpClient){}
      
    

    getPartys(){
        return this.http.get<Party[]> (this.API_URL);
    }

    addToMongo(party:Party): Observable<Party>{
      //this.party?.push(party);
      console.log(party);
      return this.http.post<Party>(this.API_URL, party);
      
    }
    
}
