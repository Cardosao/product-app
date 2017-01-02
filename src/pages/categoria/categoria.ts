import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../providers/categoria-service';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html'
})
export class CategoriaPage {

  categories: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private catService: CategoriaService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
    this.getAll();
  }

  getAll(): void {
    this.catService.getAll()
    .then((categories:Array<any>) => {
        this.categories = categories;
    }, (error) => {
      console.log('Erro ao listar categorias', error)
    });
  }

}
