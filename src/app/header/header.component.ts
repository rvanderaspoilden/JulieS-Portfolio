import { Component, OnInit } from '@angular/core';
import { Link } from '../features/dropdown/models/link';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public seriesLink: Link;
  public homeLink: Link;
  public landscapeLink: Link;
  public contactLink: Link;
  public portraitLink: Link;

  constructor() { }

  ngOnInit() {
    this.seriesLink = new Link('Series', '/series');
    this.seriesLink.children = [new Link('Old city - la valette III', '#'), new Link('La Moula', '#')];

    this.homeLink = new Link('Home', '/home');
    this.landscapeLink = new Link('Landscape', '/landscape');
    this.contactLink = new Link('Contact me', '/contact');
    this.portraitLink = new Link('Portrait', '/portrait');
  }

}
