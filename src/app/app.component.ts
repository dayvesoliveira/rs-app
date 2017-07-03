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
               {name: 'Configurações'}];
  menuItensConf = [
               {name: 'Vendas'},
               {name: 'App'},
               {name: 'Configurações'}];

}
