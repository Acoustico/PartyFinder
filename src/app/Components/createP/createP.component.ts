import { Component, Input, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { PartyService } from '../../Services/party.service';
import {CrearParty} from '../../Model/crearparty';
import {Party} from '../../Model/party';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-createP',
  templateUrl: './createP.component.html',
  styleUrls: ['./createP.component.css']
})
export class createPComponent implements OnInit {
  @Input() data:any;
  party:Party[] | undefined;
  /*Party:CreateParty | undefined
  party:Party | undefined
  ={ title: new String,
    language: new String,
    game: new String,
    info: new String }*/
  
  constructor(public partyService: PartyService) {
    //this.Party=new CreateParty();
   }

  ngOnInit(): void {
  }

  /*createparty(form:NgForm){
    //console.log(form.value);
    this.partyService.addToMongo(this.party);
  }
*/
  addParty(title:string,game:string,language:string,info:string){
    const contenido: string[]=[];
    const party=[];
    party.push(title)
    party.push(game)
    party.push(language)
    party.push(info)
    console.log(party);
    //stringify(party);
    //this.partyService.addParty(stringify(party));
    //this.party=contenido;
    //this.partyService.addParty(this.party);
  }
  
}