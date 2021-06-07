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
    partys: Party[]=[];
    crear_party: CrearParty[];
    partyCreado: CrearParty={};
    constructor(private http: HttpClient){
      this.crear_party=[];
    }
      
    getPartys(){
      var partyTitle = 'title';
      var archive = [],
          keys = Object.keys(localStorage),
          i = 0, key;
        localStorage.key
      return this.crear_party=JSON.parse(localStorage.getItem(keys[i]) || '{}');

    }

    addParty(item:CrearParty){
      
      this.crear_party?.push(item);

     
      localStorage.setItem(item.title ||'{}',JSON.stringify(this.crear_party));
     
    }
    
}
