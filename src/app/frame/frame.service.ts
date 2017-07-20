import { EventEmitterService } from './event-emitter.service';
import { Injector, 
         Component, 
         Inject, 
         ViewChild, 
         TemplateRef, 
         ElementRef, 
         Injectable, 
         OnInit, 
         NgZone,
         Output,
         EventEmitter
        } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Subject} from 'rxjs/Subject';

import { DomSanitizer, DOCUMENT, SafeResourceUrl } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig, MD_DIALOG_DATA } from '@angular/material';

import { DialogComponent } from "../home/dialog.component";

import { Transfer } from './transfer';

@Component({
  moduleId: module.id,
  selector: 'iframe-dialog',
  styles: [
    `iframe {
      width: 1024px;
      height:800px;
    }`
  ],
  template: `<md-dialog-content>
                <iframe #dialogJretail frameborder="0" [src]="data"></iframe>
             </md-dialog-content>
             `
})
export class IFrameDialog implements OnInit {

    @ViewChild('dialogJretail') iframe: ElementRef;

    ngOnInit(): void {}

    constructor( @Inject(MD_DIALOG_DATA) public data: any) { }

    getFrame(): ElementRef {
        return this.iframe;
    }
}

@Injectable()
export class FrameService {

    public dialogRef: MdDialogRef<IFrameDialog>;

    private lastCloseResult: object[];
    private doc: any;
    
    private checkTransfer: Subject<Transfer> = new Subject<Transfer>();
    private transfer: Observable<Transfer>;
    private dialogResult: Transfer;

    showDialog = false;

    private subject = new Subject<any>();

    constructor(private dialog: MdDialog, 
                public sanitizer: DomSanitizer,
                private _ngZone: NgZone,
            public dialogNew: DialogComponent) {

        window['angularComponentRef'] = {
            zone: this._ngZone, 
            componentFn: (value) => this.calledFromOutside( value ),
            component: this
        };
    }

    openNew( url: string ){
        let _url = this.sanitizer.bypassSecurityTrustResourceUrl( url );
        this.dialogNew.data = url;
        this.dialogNew.open(url);
        this.subject.subscribe(message => {
            this.dialogNew.close();
            console.log('this.dialogNew.close', message);
        });
        return this.subject;
    }

    open(url: string) {

        let _url = this.sanitizer.bypassSecurityTrustResourceUrl( url );

        let config = new MdDialogConfig();
        config.disableClose = true;
        config.data = _url;

        this.dialogRef = this.dialog.open(IFrameDialog, config);
        this.dialogRef.afterClosed().subscribe( (result: object[]) => {
            this.lastCloseResult = result;
            this.dialogRef = null;
        });

        this.subject.subscribe(message => {
            this.dialogRef.close( message );
            console.log('this.dialogRef.close', message);
        });
    }

    calledFromOutside(dialogResult: any) {
        this._ngZone.run(() => this._close( dialogResult ) );
    }
    
    _close(dialogResult: Transfer) {
        this.dialogResult = dialogResult;
        this.subject.next( dialogResult );       
        console.log('_close');
    }

    getDocIframe( iframe ): ElementRef {
        if (iframe != null) {
            return iframe.nativeElement.contentDocument || iframe.nativeElement.contentWindow;
        }
        return null;
    }

}