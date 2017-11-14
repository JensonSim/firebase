import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

import { AuthProvider } from '../../providers/auth/auth';
 
import { User } from '../models/user';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 
  public userId: string;
  _firstName: String;
  _gender: String;
  _lastName: String;
  _name: String;
  _data: any;
  user: any = {} as User;
 
  constructor(public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthProvider) {
  }
 
  signin(user: User) {
    let loading = this.loadingCtrl.create({
      content: 'Checking information..'
    });
    loading.present();
 
    this.authService.login(this.user)
      .then(auth => {
        loading.dismiss();
        this.navCtrl.setRoot(ProfilePage);
      })
      .catch(err => {
        loading.dismiss();
        let errortoast = this.loadingCtrl.create({
          content: 'Login Failed!',
          duration: 2000
      });
      errortoast.present();
      });
  }
 
  signup() {
    this.navCtrl.push(RegisterPage);
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
 
}
 
