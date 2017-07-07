import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

    dialog: CrossDialog;

    constructor(dialog: CrossDialog) {
        this.dialog = dialog;
    }

    showDialog() {
        console.log( this.dialog );
        //this.dialog.show();
    }
}