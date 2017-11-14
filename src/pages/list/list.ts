import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, PathReference } from 'angularfire2/database';
import { NavController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: AngularFireList<string>;
  
 
  constructor(private afDB: AngularFireDatabase) {
    this.items = afDB.list('users');
    
  }
}
