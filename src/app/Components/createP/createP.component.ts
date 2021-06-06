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
  
  constructor(public partyService: PartyService) {
    
   }

  ngOnInit(): void {
  
  }

  

 
}