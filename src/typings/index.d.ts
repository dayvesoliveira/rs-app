/*
 * Custom Type Definitions
 * When including 3rd party modules you also need to include the type definition for the module
 * if they don't provide one within the module. You can try to install it with @types
 */

// support NodeJS modules without type definitions
//declare module '*';

// Extra variables that live on Global that will be replaced by webpack DefinePlugin


declare var childDialogArguments: any;

/**
 * function que sera declarada abaixo seguindo o padrao de typings.
 *
 * var CrossDialogRsis = function($R) {
 *   return new function() {
 *       this._FILE = "006crossDialogRsis.js";
 *       this.version = JRetail.rsis.VersionJS;
 *   }();
 * }(Rsis);
 */
interface CrossDialogRsis {
    _FILE: string;
    version: string;
}

interface CrossDialogRsisFactory {
    new(): CrossDialogRsis;
    (): CrossDialogRsis;
}

declare var CrossDialogRsis: CrossDialogRsisFactory;

/** 
 * declaracao para a crossDialog para uso do javascript da lib Rsis.
 * 
 */
interface CrossDialog {
    
    _configAddressPrefix(address: string): string;

    windowDialog: string;
    
    errorMessage:string;
    
    _returnArray: any[];
    
    getReturnModal(returnModal?: any): any;
    
    setParam(dialogName:string, key:string, value:string): void;
    
    setStatus(dialogName:string, s:string, f:string): void;
    
    setParamModal():void;
    
    getDialogArguments(dialogName: string): Array<any>;
    
    getOpenerArguments(_arg_): Array<any>;
    
    setReturnValue(): void;
    
    showFile(_targetAction:string, _targetMethod:string, _params:string, _isDownload:boolean, _args:any, _title:string): void;
    
    open(url:string, type:string, params:any, _args:any, brokeQueryString:boolean):void;
    
    hasPlugin(ext:any):void;
    
    getParamsQueryString(strHref:string, params:any): Array<any>; 
    
    dialog(_params:any, dialogArguments:any): void;
    
    /**
     * Funcao que executa a abertura da tela modal do framework do JRetail
     * 
     * @param url
     * @param params define o tamanho de abertura da tela.
     * 
     * @param args passagem de parametros para tela que está sendo executada
     * @param callback O callback de retorno da chamada modal.
     * @param callbackArgs array de parametros a serem passados para a funcao callback da modal.
     * @author Dayves Oliveira
     */
    show(url:string, params:any, args:any, callback:Function, callbackArgs:Array<any>);
    /**
     * Funcao que executa a abertura da tela modal do framework do JRetail
     * 
     * @param url
     * @param params define o tamanho de abertura da tela.
     * 
     * @param args passagem de parametros para tela que está sendo executada
     * @param callback O callback de retorno da chamada modal.
     * @param callbackArgs array de parametros a serem passados para a funcao callback da modal.
     * @author Dayves Oliveira
     */
    show(url:string, params:any, args:any, callback:Function[], callbackArgs:Array<any>);
    
    close(name:string): void;
    
    mountHtmlPage(jsonSerialized:string[]): void;
    
    argsToArray(args:string[]): void;
}

/*interface CrossDialogFactory {
    new(): CrossDialog;
    (): CrossDialog;
}*/

declare var crossDialog: CrossDialog;