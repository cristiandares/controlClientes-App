import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  //usamos el objeto que vamos a crear para enviar a la base de datos
  public cliente: Cliente = new Cliente();
  //este es el titulo del formulario
  public titulo:string = 'Crear Cliente';

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }
  
  //este metodo se va a conectar con la api para utilizarla para registrar el elemento en la base 
  public create():void{
    this.clienteService.create(this.cliente).subscribe(
      response => 
    )
    console.log("Clicked!");
    console.log(this.cliente);
  }; 

}
