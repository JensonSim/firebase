import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';
import { LoginPage } from '../login/login';

@Component({
 templateUrl: 'tabs.html'
})
export class TabsPage {
 // this tells the tabs component which Pages
 // should be each tab's root Page
 tab1Root: any = HomePage;
 tab2Root: any = ListPage;
 tab3Root: any = LoginPage;

 constructor() {

 }
}
