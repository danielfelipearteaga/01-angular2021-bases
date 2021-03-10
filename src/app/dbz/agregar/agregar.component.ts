import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };

  /* @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); */

  /* @Input() personajes: Personaje[] = []; */

  constructor(private dbzService: DbzService) {}

  ngOnInit(): void {}

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    this.dbzService.agregarNuevoPersonaje(this.nuevo);
    
    /* this.personajes.push(this.nuevo); */
    /* this.onNuevoPersonaje.emit(this.nuevo); */

    this.nuevo = {
      nombre: '',
      poder: 0,
    };

    /* console.log(this.personajes); */
  }

  /* agregarEvent(event: Event) {
    event.preventDefault();

    console.log(this.nuevo);
  }

  cambiarNombre(event: any) {
    console.log(event.target.value);
  } */
}
