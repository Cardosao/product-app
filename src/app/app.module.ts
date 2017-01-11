import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutoPage } from '../pages/produto/produto';
import { CategoriaPage } from '../pages/categoria/categoria';
import { CategoriaModalPage } from '../pages/categoria-modal/categoria-modal';
import { ProdutoModalPage } from '../pages/produto-modal/produto-modal';
import { UsuarioPage } from '../pages/usuario/usuario';

import { CategoriaService } from '../providers/categoria-service';
import { ProdutoService } from '../providers/produto-service';
import { UsuarioService } from '../providers/usuario-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdutoPage,
    CategoriaPage,
    CategoriaModalPage,
    ProdutoModalPage,
    UsuarioPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProdutoPage,
    CategoriaPage,
    CategoriaModalPage,
    ProdutoModalPage,
    UsuarioPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutoService,
    CategoriaService,
    UsuarioService,
  ]
})
export class AppModule {}
