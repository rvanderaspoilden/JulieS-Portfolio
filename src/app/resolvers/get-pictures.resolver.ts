import { Image } from '../models/image';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class GetPicturesResolver implements Resolve<Image[]> {

  constructor(private db: AngularFireDatabase) {
  }

  resolve(): Observable<Image[]> {
    return this.db.list<Image>('landscape').valueChanges();
  }
}
