import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Party} from '../Model/party'
import {CrearParty} from '../Model/crearparty';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
    providedIn: 'root'
})
export class PartyService{
    API_URL= "http://localhost:3000/api/party";
    partys: Party[] | undefined;
    crear_party: CrearParty[] | undefined;
    constructor(private http: HttpClient){
      this.crear_party=[];
    }
      
    getPartys(){
        return this.http.get<Party[]> (this.API_URL);
    }

    addParty(item:CrearParty){
      this.crear_party?.push(item);
      //this.http.post<Party>(this.API_URL, item);
      localStorage.setItem('Party',JSON.stringify(this.crear_party));
     // return this.http.post<Party[]>(this.API_URL, JSON.stringify(item));
      
    }
    
}
