import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { CategoriaService } from '../../providers/categoria-service';

@Component({
  selector: 'page-categoria-modal',
  templateUrl: 'categoria-modal.html'
})
export class CategoriaModalPage {

  public categoria: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private catService: CategoriaService) {
    this.categoria = navParams.get('categoria') || new Object();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaModalPage');
  }

  public close() {
    this.viewCtrl.dismiss();
  }

  public save() {
    if(this.categoria.id == undefined) {
      this.insert();
    } else {
      this.update();
    }
  }

  private update() {
    this.catService.update(this.categoria).then((response) => {
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
    this.catService.insert(this.categoria).then((response) => {
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
