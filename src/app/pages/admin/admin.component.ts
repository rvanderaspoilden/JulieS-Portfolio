import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public panelToManage: string;
  public user: User;

  constructor(private afAuth: AngularFireAuth) {
  }

  ngOnInit() {
    this.user = this.afAuth.auth.currentUser;
  }

  public login(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password).then(() => {
      this.user = this.afAuth.auth.currentUser;
    }).catch(() => console.log('impossible de se connecter'));
  }

  public setPanelToManage(value: string): void {
    this.panelToManage = value;
  }

}
