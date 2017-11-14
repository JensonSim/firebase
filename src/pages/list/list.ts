import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, PathReference } from 'angularfire2/database';
<<<<<<< HEAD
 
=======
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';



>>>>>>> ab8ff2ca95958b5b3a92a385e3b9d4de366ef6f6
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
<<<<<<< HEAD
  items: AngularFireList<any>;
=======
  items: AngularFireList<string>;
  
>>>>>>> ab8ff2ca95958b5b3a92a385e3b9d4de366ef6f6
 
  constructor(private afDB: AngularFireDatabase) {
    this.items = afDB.list('users');
  }
}
