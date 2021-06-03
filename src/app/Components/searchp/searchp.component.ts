import { Component, OnInit } from '@angular/core';
import {PartyService} from '../../Services/party.service';

@Component({
  selector: 'app-searchp',
  templateUrl: './searchp.component.html',
  styleUrls: ['./searchp.component.css']
})
export class SearchpComponent implements OnInit {

  constructor(public partyService: PartyService) { }

  ngOnInit(): void {
    console.log(this.partyService.getPartys());
    this.getPartys();
  }

  getPartys(){
    this.partyService.getPartys().subscribe(
      res =>{
        this.partyService.partys = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
