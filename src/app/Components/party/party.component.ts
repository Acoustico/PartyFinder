import { Component, OnInit, Input } from '@angular/core';
import * as M from 'materialize-css';
import { PartyService } from 'src/app/Services/party.service';


@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  @Input() data:any;
  constructor(public partyService: PartyService) { }

  ngOnInit(): void {
   // this.getPartys();
    this.partyService.getPartys();
  }
  /*getPartys(){
    this.partyService.getPartys().subscribe(
      res=> {
        this.partyService.partys=res;
        console.log(this.partyService.partys);
      },
      err =>{
        console.log(err);
      }
    )
  }*/
  

}
