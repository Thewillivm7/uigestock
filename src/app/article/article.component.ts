import { Component } from '@angular/core';
import { ArticleService } from '../article.service';
import { DataService } from '../ajout.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  tableData: any[] = [];
  tablearticle: any[] = [];
  designationarticle: string='';
  stockalertearticle:number=1;
  constructor(private articleService: ArticleService,private DataService: DataService) { }

  ngOnInit(): void {
    this.articleService.getTableArticle().subscribe(data => {
      this.tablearticle = data;
    });
  }
  LectureDefaut(){
    this.articleService.getTableArticle().subscribe(data => {
      this.tablearticle = data;
    });
  }
  onSubmit() {
    const data = {
      designationarticle: this.designationarticle,
      stockalertearticle: this.stockalertearticle
    };
    this.DataService.ajouternewarticle(data).subscribe(
      response => {
        console.log('Données ajoutées avec succès à la base de données', response);
      this.ngOnInit();

      },
      error => {
        console.error('Erreur lors de l\'ajout des données à la base de données', error);
      }
    );
    this.stockalertearticle=1;
    this.designationarticle='';
  }
}