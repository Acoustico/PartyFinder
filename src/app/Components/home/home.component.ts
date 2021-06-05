import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  sGame='';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  searchbox(form: NgForm){
    this.router.navigateByUrl('searchp');
    console.log(form.value);
  }
}
