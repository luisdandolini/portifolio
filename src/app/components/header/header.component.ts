import { Component, OnInit } from '@angular/core';
import { isMobile } from 'src/app/utils/isMobile';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isClosed = true;
  isMobile = isMobile();
  faHome = faHome;
  faUser = faUser;
  faLaptopCode = faLaptopCode;
  faBook = faBook;
  faPhone = faPhone;

  ngOnInit(): void {
  }

  onSideBarClick() {
    this.isClosed = !this.isClosed;
  }

}
