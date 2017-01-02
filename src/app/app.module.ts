import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdutoPage } from '../pages/produto/produto';
import { CategoriaPage } from '../pages/categoria/categoria';
import { GridPage } from '../pages/grid/grid';

import { CategoriaService } from '../providers/categoria-service';
import { ProdutoService } from '../providers/produto-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GridPage,
    ProdutoPage,
    CategoriaPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GridPage,
    ProdutoPage,
    CategoriaPage,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutoService,
    CategoriaService,

  ]
})
export class AppModule {}
