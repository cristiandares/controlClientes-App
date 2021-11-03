//importamos la librerias necesarias

import { Component } from '@angular/core';

//creamos la clase para crear un componente, usamos el decorador indicado
//en este decorador van a ir los atributos del componente
@Component({
  selector: 'app-header',
  //en el template podemos quemar codigo html directamente y funciona con template
  //
  templateUrl: './header.component.html'
})
export class HeaderComponent {
    title: string = 'App Angular'
}
