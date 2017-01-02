import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import {GridPage} from "../pages/grid/grid";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public pages: Array<any>;
  public rootPage:any = HomePage;

  constructor(platform: Platform, public menuCtrl: MenuController) {
    this.initPages();
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  private initPages() {
    this.pages = [
      {title: 'Grid', component: GridPage, icon: 'apps'},
      {title: 'Home', component: HomePage, icon: 'home'}
    ];
  }

  public openPage(page, side) : any {
    this.rootPage = page.component;
    this.menuCtrl.close(side);
  }


}
