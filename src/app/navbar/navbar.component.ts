import { Component, OnInit } from '@angular/core';
import { ActivateService } from '../services/activate.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public acti: ActivateService) {
  }

  ngOnInit(): void {
  }

}
