import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from'@angular/router';


declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(
	private _router: Router,
  ) { }

  ngOnInit() {
  	$('.carousel').carousel({
	  interval: 6000,
	  pause: "false"
	});
  }

}
