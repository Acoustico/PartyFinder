import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sGame='';

  constructor() { }

  ngOnInit(): void {
  }

  searchbox(form: NgForm){
    console.log(form.value);
  }
}
