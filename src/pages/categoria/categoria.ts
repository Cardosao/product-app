import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { CategoriaService } from '../../providers/categoria-service';
import { CategoriaModalPage } from '../categoria-modal/categoria-modal';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html'
})
export class CategoriaPage {

  categories: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
        private catService: CategoriaService,
        private alertCrtl: AlertController, private modalCrtl: ModalController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
    this.getAll();
  }

  public getAll(): void {
    this.catService.getAll()
      .then((categories: Array<any>) => {
        this.categories = categories;
      }, (error) => {
        console.log('Erro ao listar categorias', error)
      });
  }

  public delete(categoria: any): void {
    let alert = this.alertCrtl.create({
      title: 'Deletar Categoria',
      message: 'Deseja realmente deletar a categoria \'' + categoria.nome + '\'?',
      buttons: [
        {
          text: 'Cancelar'
        }, {
          text: 'Deletar', handler: (data) => {
            this.catService.remove(categoria.id)
              .then((data) => {
                this.getAll();
              }, (error) => {
                let msg: string = 'Erro ao deletar a categoria: ' + categoria.nome;
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
      .create(CategoriaModalPage);

    modal.onDidDismiss(()=> {
      this.getAll();
    });

    modal.present();
  }

  public update(categoria: any): void {
    let modal = this.modalCrtl
      .create(CategoriaModalPage, {
        categoria: categoria
    });

    modal.onDidDismiss(()=> {
      this.getAll();
    });

    modal.present();
  }



}
