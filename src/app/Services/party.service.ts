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
    crear_party: Party[] | undefined;
    constructor(private http: HttpClient){
      this.crear_party=[]
    }
      
    

    getPartys(){
        return this.http.get<Party[]> (this.API_URL);
    }

    addToMongo(item:Party){
      this.crear_party?.push(item);
      localStorage.setItem('crear',JSON.stringify(this.crear_party));
      console.log(this.crear_party);
      
      
    }
    
}
