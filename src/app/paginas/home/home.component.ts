import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent {
  cuandoclickeas(a:number,b:number){
    let suma= a + b
    console.log("aprete el lUIS buton", suma);
    
  }
}
