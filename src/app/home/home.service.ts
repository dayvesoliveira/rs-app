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
        param["isAngularCall"]  = true;

        crossDialog.show(_url, param, null, ()=>{
            param = null;
            console.log('teste 123');
            return <any>{ value:"a", description:"b" };
        }, null);
    }

    getHeroes(): object[] {
        let HEROES: object[] = [
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
        return HEROES;
    }
    
}