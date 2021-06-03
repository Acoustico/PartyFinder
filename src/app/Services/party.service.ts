import {Injectable} from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Party} from '../../models/partys.js'

@Injectable({
    providedIn: 'root'
})
export class PartyService{
    API_URL= "http://localhost:3000/api/party";
    partys: Party[] | undefined;
    constructor(private http: HttpClient){}

    getPartys(){
        return this.http.get<Party[]>(this.API_URL);
    }

}
