import { Component, OnInit } from '@angular/core';
import { Link } from '../features/dropdown/models/link';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public homeLink: Link;
  public contactLink: Link;
  public links: Link[];

  constructor(private db: AngularFireDatabase,
              private route: ActivatedRoute,
              private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.links) {
          this.checkQueryParams();
        } else if (this.router.url !== '/admin') {
          this.router.navigateByUrl('/home');
        }
      }
    });
  }

  ngOnInit() {
    this.homeLink = new Link('Home', '/home');
    this.contactLink = new Link('About me', '/about');

    this.db.object<any>('/').valueChanges().subscribe(links => {
      this.links = [];
      Object.keys(links).forEach(link => {
        const linkTmp = new Link();
        linkTmp.name = link;
        linkTmp.href = '/' + link;
        linkTmp.children = [];

        Object.keys(links[link]).forEach(underlink => {
          if (underlink !== 'pictures' && underlink !== 'context' && underlink !== 'default') {
            const underlinkTmp = new Link();
            underlinkTmp.name = underlink;
            underlinkTmp.href = '/' + underlink;
            linkTmp.children.push(underlinkTmp);
          }
        });

        if (!linkTmp.children.length) {
          delete  linkTmp.children;
        }

        this.links.push(linkTmp);
      });

      this.links = this.links.reverse();
    });
  }

  private checkQueryParams(): void {
    this.route.queryParams.subscribe(param => {
      if (param.hasOwnProperty('href')) {
        const query = param['href'];
        let findMatch = false;

        this.links.forEach(link => {
          if (link.children) {
            const match = _.find(link.children, child => {
              return child.name === query;
            });

            if (match) {
              findMatch = true;
              return true;
            }
          }
        });

        if (!findMatch) {
          this.router.navigateByUrl('/home');
        }
      }
    });
  }

}
