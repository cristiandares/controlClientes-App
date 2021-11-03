//importamos las librerias
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    public autor: any = {nombre:'Cristian', apellido:'Restrepo'};  //any es un tipo de dato generico
}
