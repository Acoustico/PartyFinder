import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
