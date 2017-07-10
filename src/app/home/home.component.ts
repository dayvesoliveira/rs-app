import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';

import { HomeService } from "./home.service";

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    HEROES: any[] = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    public service: HomeService;
    public dialog: MdDialog;

    constructor(service: HomeService, dialog: MdDialog) {
        this.service = service;
        this.dialog = dialog;
    }

    ngOnInit() {}

    open() {
        this.service.showDialog('/jretail/view/jsp/teste.jsf');
    }

    edit( id ) {
        let dialogRef = this.dialog.open(DialogMessages, {
            data: 'Linha selecionada: '+ id,
        });
    }

}

@Component({
  selector: 'dialog-messages',
  template: `<h2 md-dialog-title>Atencao:</h2>
            <md-dialog-content>
                {{ data }}
            </md-dialog-content>
            <md-dialog-actions>
                <button md-button [md-dialog-close]="true">Yes</button>
            </md-dialog-actions>`,
})
export class DialogMessages {
    constructor(@Inject(MD_DIALOG_DATA) public data: any) { }
}
