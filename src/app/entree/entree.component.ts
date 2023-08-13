import { Component } from '@angular/core';
import { ServiceEntreeService } from '../service-entree.service';
import { ArticleService } from '../article.service';
import { DataService } from '../ajout.service';
@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.scss']
})
export class EntreeComponent {
  tableData: any[] = [];
  tablearticle: any[] = [];
  selectedArticleId: number=1;
  nbarticle: number=0;
  pachattotal: string='';
  motifaction:number=1;
  constructor(private dataService: ServiceEntreeService,private articleService: ArticleService,private DataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getTableEntree().subscribe(data => {
      this.tableData = data;
    });
    this.articleService.getTableArticle().subscribe(data => {
      this.tablearticle = data;
    });
  }
  LectureDefaut(){
    this.dataService.getTableEntree().subscribe(data => {
      this.tableData = data;
    });
    this.articleService.getTableArticle().subscribe(data => {
      this.tablearticle = data;
    });
  }
  onSubmit() {
    const data = {
      idarticle: this.selectedArticleId,
      nbarticle: this.nbarticle,
      totalaction: this.pachattotal,
      motifaction: this.motifaction
    };
    this.DataService.ajouterEntree(data).subscribe(
      response => {
        console.log('Données ajoutées avec succès à la base de données', response);
      this.ngOnInit();

      },
      error => {
        console.error('Erreur lors de l\'ajout des données à la base de données', error);
      }
    );
    this.selectedArticleId=1;
    this.nbarticle=0;
    this.pachattotal='';
  }
}
