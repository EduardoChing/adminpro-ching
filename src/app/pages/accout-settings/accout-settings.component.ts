import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styles: []
})
export class AccoutSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {
  }
  cambiarColor(tema: string , link: any ) {

console.log( link);

let url: string = `assets/css/colors/${tema}.css`;
this._document.getElementById('tema').setAttribute('href' , url);

  }
  aplicarCheck( link: any ) {

    let selectores: any = document.getElementsByClassName('selector');
    for ( let ref of selectores ) {

   ref.classList.remove('working');

    }
    link.classList.add('working');

  }
}
