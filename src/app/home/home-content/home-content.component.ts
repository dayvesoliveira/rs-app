import { Component, OnInit, Inject } from '@angular/core';
import {MD_DIALOG_DATA, MdDialog, MdDialogRef} from '@angular/material';
import { HomeService } from "../home.service";

@Component({
  selector: 'home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

    constructor(private service: HomeService, private dialog: MdDialog) { }

    ngOnInit() {
    }

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
