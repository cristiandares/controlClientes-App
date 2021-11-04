import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

//importamos libreria para usar formularios
import { FormsModule } from '@angular/forms';

//importamos la libreria que nos permite comunicarnos con el backend o servidor remoto por http
import { HttpClientModule } from '@angular/common/http'; 

//realizo el import de los componente que creamos
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService  } from './clientes/cliente.service';
import { FormComponent } from './clientes/form.component';

// Estas son las url o rutas que se configuran en el proyecto
const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component:DirectivaComponent},
  {path: 'clientes', component:ClientesComponent},
  {path: 'clientes/form', component:FormComponent},
  {path: 'clientes/form/:id', component:FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,  //aca en declarations tambien debo de declarar el componentes
    FooterComponent, 
    DirectivaComponent, 
    ClientesComponent, FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //registramos el modulo HttpClientModule para comunicarnos con el backend
    RouterModule.forRoot(routes), //le paso el listado de las rutas configuradas en el proyecto
    FormsModule //registramos el FormsModule para usar formularios
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
