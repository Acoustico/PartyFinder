import { Component, OnInit } from '@angular/core';
import {Party} from 'src/app/Model/crearparty';

@Component({
  selector: 'app-createP',
  templateUrl: './createP.component.html',
  styleUrls: ['./createP.component.css']
})
export class createPComponent implements OnInit {
  party:Party | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
