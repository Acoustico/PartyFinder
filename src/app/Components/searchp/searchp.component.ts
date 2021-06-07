import { Component, OnInit } from '@angular/core';
import {PartyService} from '../../Services/party.service';
import {NgForm} from '@angular/forms';
import { Party } from 'src/app/Model/party';

@Component({
  selector: 'app-searchp',
  templateUrl: './searchp.component.html',
  styleUrls: ['./searchp.component.css']
})
export class SearchpComponent implements OnInit {
  sName='';
  sGame='';
  
  constructor(public partyService: PartyService) { }

  ngOnInit(): void {
    //console.log(this.partyService.getPartys());
    //this.getPartys();

  }

  searchbox(form: NgForm){
    console.log(form.value);
  }

  /*getPartys(){
    this.partyService.getPartys()
    /*.subscribe(
      (      res: Party[] | undefined) =>{
        this.partyService.partys = res;
        console.log(res);
      },
      (      err: any) => {
        console.log(err);
      }
    )*/
  
}
