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
      
      empresa:object = {
        descBreve:     "GE MAGAZINE",
        descBreveOrg:  "RS SOLUCOES PARA VAREJO LTDA",
        descBreveLoja: "01 - UBERLANDIA"
      };
}
