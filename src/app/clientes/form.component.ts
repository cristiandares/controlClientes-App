import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  //usamos el objeto que vamos a crear para enviar a la base de datos
  public cliente: Cliente = new Cliente();
  //este es el titulo del formulario
  public titulo:string = 'Crear Cliente';

  constructor(private clienteService:ClienteService,
              private router:Router,
              private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCliente();
  }

  cargarCliente():void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe( (cliente) => this.cliente = cliente);
      }
    })
  }
  
  //este metodo se va a conectar con la api para utilizarla para registrar el elemento en la base 
  public create():void{
    this.clienteService.create(this.cliente).subscribe(
      response => {
      this.router.navigate(['/clientes'])
      swal('Nuevo cliente', `Cliente ${this.cliente.nombre} creado con éxito`, 'success')
      }
    )
  }; 

  public update():void{
    this.clienteService.update(this.cliente)
    .subscribe( cliente => {
      this.router.navigate(['/clientes'])
      swal('Cliente Actualizado', `Cliente ${this.cliente.nombre} actualizado con éxito`, 'success')
    })
  }
}
