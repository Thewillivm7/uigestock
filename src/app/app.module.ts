import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { EntreeComponent } from './entree/entree.component';
import { SortieComponent } from './sortie/sortie.component';
import { StockComponent } from './stock/stock.component';
import { FilterPipe } from 'src/pipe';
import { FormsModule } from '@angular/forms';
import { ArticleComponent } from './article/article.component';


@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    EntreeComponent,
    SortieComponent,
    StockComponent,
    FilterPipe,
    ArticleComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
