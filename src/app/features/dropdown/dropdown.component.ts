import { Component, Input, OnInit } from '@angular/core';
import { Link } from './models/link';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {

  @Input() public link: Link;

  constructor() {
  }

  ngOnInit() {
  }

}
