import { Injectable } from '@angular/core';
import { CrossDialog } from 

@Injectable()
export class HomeService {
    
    constructor() {}


    //openModalMenu(this, '/jretail/jretail/view/jsp/mensagemApp.jsf', 2142005);

    showDialog(_url:string) {
        //console.log( tithis.dialog );
        let _params:any;
        let _args:any; 
        let _callback:any;
        let _callbackArgs:any;

        let param = new Array<any>();
        param["windowDialog"]   = this;
        param["timeInit"]       = new Date().getTime();
        param["identMenu"]      = "";

        crossDialog.show(_url, param, null, ()=>{
            param = null;
            //delete(param);
        }, null);
    }

    
}