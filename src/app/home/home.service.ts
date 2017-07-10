import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {
    
    constructor() {}

    showDialog(_url:string) {
        
        //console.log( tithis.dialog );
        //openModalMenu(this, '/jretail/jretail/view/jsp/mensagemApp.jsf', 2142005);

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
            console.log('teste 123');
            //delete(param);
            return <any>{ value:"a", description:"b" };
        }, null);
    }

    
}