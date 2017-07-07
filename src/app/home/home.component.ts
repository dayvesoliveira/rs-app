import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-home',
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


/*  crossDialog: CrossDialog;

  constructor(crossDialog: CrossDialog){
      this.crossDialog = crossDialog;
  }

  show() {
      let url: string = '';
      let params: any = [];
      let args: any = [];
      let callback: any;
      let callbackargs: any;
      this.crossDialog.show(url, params, args, callback, callbackargs);
  }*/

  ngOnInit() {
  }

}
