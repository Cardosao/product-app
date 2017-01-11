import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../providers/usuario-service';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from '../../model/user';

@Component({
  selector: 'page-usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioPage {

  user: User;
  cadastro: any;
  users: Array<User>;
  dados: boolean;
  form: boolean;
  iconForm: string = 'add';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private service: UsuarioService,
    private formBuilder: FormBuilder) {
    this.users = new Array<User>();
    this.cleanForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsuarioPage');
    this.getAll();
  }

  public insert() {
    this.service.insert(this.cadastro.value)
      .subscribe(
      (data) => {
        console.log("INSERT CORRETO", data);
      }, error =>
        console.log("ERROR:::", error)
      );
      this.cleanForm();
      this.getAll();
  }

  public update(user: User): void {
    this.service.update(user)
      .subscribe(
      (data) =>
        console.log("UPDATE CORRETO", data)
      , error =>
        console.log("ERROR:::", error)
      );
    this.cleanForm();
    this.getAll();

  }

  public delete(user: User): void {
    console.log("USER PARA DELETE:", user)
    this.service.detele(user.id)
      .subscribe(
      (data) =>{
        this.getAll()
        this.cleanForm();
        console.log("DELETE CORRETO", data)
      }
      , error =>
        console.log("ERROR:::", error)
      );
  }

  public getAll(): void {
    this.service.getAll().subscribe(
      (data: Array<User>) => {
        this.users = data;
        this.users = this.arraySorter(this.users);
        console.log(data);
      }, (error) => {
        console.log('Erro ao listar Usuarios', error)
      }
    );
  }


  public showData() {
    this.dados = !this.dados;
  }

  public showForm() {
    this.form = !this.form;
    this.iconChange();
  }

  public iconChange() {
    this.iconForm = !this.form ? 'add' : 'close';
  }

  // private createUser(cadastro: User): User {
  //   let user = new User();
  //   user.id = cadastro.id;
  //   user.nome = cadastro.nome;
  //   user.password = cadastro.password;
  //   user.email = cadastro.email;
  //   return user;
  // }

  private cleanForm() {
    this.cadastro = {};
    this.user = new User();
    this.cadastro = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public arraySorter(array: Array<any>): Array<any> {
    return array.sort((a, b) => {
      if (a.nome.toLowerCase() < b.nome.toLowerCase())
        return -1;
      if (a.nome.toLowerCase() > b.nome.toLowerCase())
        return 1;
      return 0;
    });
  }

}
