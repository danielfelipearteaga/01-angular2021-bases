import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  heroeBorrado: string = '';

  borrarPrimerHeroe() {
    let heroeBorrado = this.heroes.shift() || '';
    this.heroeBorrado = heroeBorrado;
  }

  borrarHeroe(heroe: string) {
    let i = this.heroes.indexOf(heroe);

    if (i !== -1) {
      this.heroes.splice(i, 1);
    }
  }

}
