import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ProdutoService } from '../../providers/produto-service';
import { CategoriaService } from '../../providers/categoria-service';

@Component({
  selector: 'page-produto-modal',
  templateUrl: 'produto-modal.html'
})
export class ProdutoModalPage {

  public produto: any;
  public categories: Array<any>;

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      private viewCtrl: ViewController,
      private pService: ProdutoService,
      private cService: CategoriaService) {
    this.produto = navParams.get('produto') || new Object();
    this.getCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoModalPage');
  }

  public close() {
    this.viewCtrl.dismiss();
  }

  private getCategorias(): void {
    this.cService.getAll()
      .then((categories: Array<any>) => {
        this.categories = categories;
      }, (error) => {
        this.categories = new Array<any>();
        console.log('Erro ao listar categorias', error)
      });

  }

  public save() {
    if(this.produto.id == undefined) {
      this.insert();
    } else {
      this.update();
    }
  }

  private update() {
    this.pService.update(this.produto).then((response) => {
      if (response) {
        this.viewCtrl.dismiss();
      }
    }, (error) => {
      console.log(error);
    }).catch((ex) => {
      console.log(ex.message);
    });
  }

  private insert() {
    this.pService.insert(this.produto).then((response) => {
      if (response) {
        this.viewCtrl.dismiss();
      }
    }, (error) => {
      console.log(error);
    }).catch((ex) => {
      console.log(ex.message);
    });
  }

}
