import { Component } from '@angular/core';
import { SortieService } from '../sortie.service';
import { StockService } from '../stock.service';
import { DataService } from '../ajout.service';

@Component({
  selector: 'app-sortie',
  templateUrl: './sortie.component.html',
  styleUrls: ['./sortie.component.scss']
})
export class SortieComponent {
  tableData: any[] = [];
  tablearticlerestant: any[] = [];
  selectedArticleId: number=1;
  nbarticle: number=0;
  motifaction:number=2;
  constructor(private sortieService: SortieService,private stockService: StockService,private DataService: DataService) { }

  ngOnInit(): void {
    this.sortieService.getTableSortie().subscribe(data => {
      this.tableData = data;
    });
    this.stockService.getTableStock().subscribe(data => {
      this.tablearticlerestant = data;
    });
  }
  isDispo(reste: number): boolean {
    return reste > 0;
  }
  onSubmit() {
    const data = {
      idarticle: this.selectedArticleId,
      nbarticle: this.nbarticle,
      motifaction: this.motifaction
    };
    this.DataService.ajouterSortie(data).subscribe(
      response => {
        console.log('Données retirées avec succès à la base de données', response);
        this.ngOnInit();
      },
      error => {
        console.error('Erreur lors de l\'ajout des données à la base de données', error);
      }
    );
    this.selectedArticleId=1;
    this.nbarticle=0;
  }
  
}
