import { Component, OnInit } from '@angular/core';
import {Party} from 'src/app/Model/crearparty';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-createP',
  templateUrl: './createP.component.html',
  styleUrls: ['./createP.component.css']
})
export class createPComponent implements OnInit {
  party:Party={}
  constructor() {
    this.party=new Party();
   }

  ngOnInit(): void {
  }

  createparty(form:NgForm){
    console.log(form.value);
  }
}