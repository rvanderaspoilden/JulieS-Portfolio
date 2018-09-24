import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public seriesLink: Link[];

  constructor() { }

  ngOnInit() {
    this.seriesLink = [];
    this.seriesLink.push(new Link('Serie 1', '#'), new Link('Serie 2', '#'));
  }

}
