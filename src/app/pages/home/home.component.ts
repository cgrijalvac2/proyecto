import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'

})
export class HomeComponent {
  nombre: string="Cristel Grijalva"
  edad: number=18
  persona: any={
    nombre: "Luis",
    edad: 20,
    direccion: "Barberena",
  };

  cambiandoEdad(){
    this.edad =50
  }
  
  frutas:string []=["manzana", "naranja", "mandarina"]
}
