import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ProdutoService } from '../../providers/produto-service';
import { ProdutoModalPage } from '../produto-modal/produto-modal';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {

  public products: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
        private pService: ProdutoService,
        private alertCrtl: AlertController, private modalCrtl: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
    this.getAll();
  }

  public getAll(): void {
    this.pService.getAll()
      .then((products: Array<any>) => {
        this.products = products;
      }, (error) => {
        console.log('Erro ao listar produtos', error)
      });
  }

  public delete(produto: any): void {
    let alert = this.alertCrtl.create({
      title: 'Deletar Produto',
      message: 'Deseja realmente deletar o produto \'' + produto.nome + '\'?',
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Deletar', handler: (data) => {
            this.pService.remove(produto.id)
              .then((data) => {
                this.getAll();
              }, (error) => {
                let msg: string = 'Erro ao deletar a produto: ' + produto.nome;
                console.error(msg);
              }).catch((exception) => {
                console.log('Exception', exception.message);
              });
          }
        }
      ]
    });
    alert.present();
  }

  public insert(): void {
    let modal = this.modalCrtl
      .create(ProdutoModalPage);

    modal.onDidDismiss(()=> {
      this.getAll();
    });

    modal.present();
  }

  public update(produto: any): void {
    let modal = this.modalCrtl
      .create(ProdutoModalPage, {
        produto: produto
    });

    modal.onDidDismiss(()=> {
      this.getAll();
    });

    modal.present();
  }

}
