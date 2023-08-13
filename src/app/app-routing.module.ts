import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntreeComponent } from './entree/entree.component';
import { SortieComponent } from './sortie/sortie.component';
import { StockComponent } from './stock/stock.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: 'entree', component: EntreeComponent },
  { path: 'sortie', component: SortieComponent },
  { path: 'stock', component: StockComponent },
  { path: 'article', component: ArticleComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
