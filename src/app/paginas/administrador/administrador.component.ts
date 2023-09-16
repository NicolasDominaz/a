import { Component } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent {
  //propiedades 
  public autos: any[] =[];

  //el constructor es la primera funcion que se ejecuta cuando se inicializa el componente

  constructor(){
    this.littelponi();
    console.log(this.autos);
    
  }

  //metodos


  littelponi(){
    console.log("va pepe luis");
    
  }
}
