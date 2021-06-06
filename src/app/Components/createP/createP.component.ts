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
  party:CrearParty;
  /*Party:CreateParty | undefined
  party:Party | undefined
  ={ title: new String,
    language: new String,
    game: new String,
    info: new String }*/
  
  constructor(public partyService: PartyService) {
    this.party={};
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
    this.party.title=title;
    this.party.game=game;
    this.party.language=language;
    this.party.info=info;
    console.log(this.party);
    //console.log(stringify(this.party))
    //this.partyService.addParty(stringify(party));
    //this.party=contenido;
    this.partyService.addParty(this.party);
  }
  
}