import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

      title = 'RSVendas';

      menuItens = [{name: 'Vendas'},
                  {name: 'App'},
                  {name: 'Configuraces'}];
      
      menuItensConf = [
                  {name: 'Vendas'},
                  {name: 'App'},
                  {name: 'Configuraces'}];


      tiles: any[] = [
        {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
        {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
        {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
        {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
      ];

      dogs: Object[] = [
        { id:1, name: 'Porter', human: 'Kara' },
        { id:2, name: 'Mal', human: 'Jeremy' },
        { id:3, name: 'Koby', human: 'Igor' },
        { id:4, name: 'Razzle', human: 'Ward' },
        { id:5, name: 'Molly', human: 'Rob' },
        { id:6, name: 'Husi', human: 'Matias' },
      ];

      basicRowHeight = 80;
      fixedCols = 4;
      fixedRowHeight = 100;
      ratioGutter = 1;
      fitListHeight = '400px';
      ratio = '4:1';

      addTileCols() { this.tiles[2].cols++; }

}
