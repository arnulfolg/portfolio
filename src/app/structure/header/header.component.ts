import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faSun, faMoon, faLanguage } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faChevronLeft = faChevronLeft;
  faLanguage = faLanguage;
  faSun = faSun;
  faMoon = faMoon;

  constructor() { }

  ngOnInit(): void {
  }

}
