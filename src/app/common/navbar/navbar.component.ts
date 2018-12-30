import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user$: Object;
  constructor( private data: DataService) {

  }

  ngOnInit() {
    this.data.getUser().subscribe(
      data => this.user$ = data
    );
  }

}
