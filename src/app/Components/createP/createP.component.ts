import { Component, OnInit } from '@angular/core';
import {CParty} from 'src/app/Model/crearparty';
import {NgForm} from '@angular/forms';
import { PartyService } from '../../Services/party.service';
import { Party } from '../../Model/party';

@Component({
  selector: 'app-createP',
  templateUrl: './createP.component.html',
  styleUrls: ['./createP.component.css']
})
export class createPComponent implements OnInit {
  Party:CParty={}
  party:Party={title: new String,
    language: new String,
    game: new String,
    info: new String }
  constructor(public partyService: PartyService) {
    this.Party=new CParty();
   }

  ngOnInit(): void {
  }

  createparty(form:NgForm){
    //console.log(form.value);
    this.partyService.addToMongo(this.party);
  }

  addParty(party:Party){
    
    this.partyService.addToMongo(party);    
  }
  
}