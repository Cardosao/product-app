import { Component } from '@angular/core';
import { Platform, MenuController, AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { ProdutoPage } from "../pages/produto/produto";
import { CategoriaPage } from "../pages/categoria/categoria";


@Component({
  templateUrl: 'app.html',

})
export class MyApp {
  public pages: Array<any>;
  public rootPage:any = HomePage;

  constructor(public platform: Platform, public menuCtrl: MenuController, public alertCtrl: AlertController) {
    this.initPages();
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.validExit();
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
    // let alertControl = this.alertCtrl;
    // let plat = this.platform;
    this.validExit(this.platform, this.alertCtrl);
  }
  ionViewDidLoad () {

  }

  ionDissmis () {

  }

  private initPages() {
    this.pages = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Produtos', component: ProdutoPage, icon: 'bookmarks'},
      {title: 'Categorias', component: CategoriaPage, icon: 'pricetags'}
    ];
  }

  public openPage(page, side) : any {
    this.rootPage = page.component;
    this.menuCtrl.close(side);
  }

  private validExit(plat: Platform, alertCtrl: AlertController) {
    plat.registerBackButtonAction(function($event) {
      let alert = alertCtrl.create({
        message: 'Você quer sair da aplicação?',
        buttons: [
          {
            text: 'Voltar',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Sair',
            handler: () => {
              plat.exitApp();
            }
          }
        ]
      });
      alert.present();
      }, 100);
  }


}
