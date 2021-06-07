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
    
  constructor(public partyService: PartyService) {
    this.party={};
   }

  ngOnInit(): void {
  }

  addParty(title:string,game:string,language:string,info:string){
    this.party.title=title;
    this.party.game=game;
    this.party.language=language;
    this.party.info=info;
    this.partyService.addParty(this.party);
  }
  
}