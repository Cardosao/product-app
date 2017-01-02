import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdutoPage } from '../produto/produto';
import { CategoriaPage } from '../categoria/categoria';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tabs: any[];
  public productPage: any = ProdutoPage;
  public categoryPage: any = CategoriaPage;
  public selected: any;

  constructor(public navCtrl: NavController) {
    this.initTabs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.selected);
  }

  private initTabs(): void {
    this.tabs = [
      {title: "Produtos", icon:"bookmarks", component: this.productPage},
      {title: "Categorias", icon:"pricetags", component: this.categoryPage}
    ];
  }



}
