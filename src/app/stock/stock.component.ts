import { Component,ViewEncapsulation  } from '@angular/core';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'],
  encapsulation: ViewEncapsulation.Emulated // Assurez-vous que cette ligne est présente ou absente pour utiliser la valeur par défaut
})
export class StockComponent {
  tableData: any[] = [];

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.stockService.getTableStock().subscribe(data => {
      this.tableData = data;
    });
  }
  isResteInferieur(item: any, valeurLimite: number): boolean {
    console.log('item.reste:', item.reste);
    console.log('valeurLimite:', valeurLimite);
    return item.reste < valeurLimite;
  }
}
