import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-listado',
  templateUrl: './listado.component.html',
} )
export class ListadoComponent {

  heroes: string[] = [ 'Ironman', 'Hulk', 'Thor', 'Spiderman' ];
  heroeBorrado: string = '';

  borrarHeroe (): void {
    this.heroeBorrado = this.heroes?.shift() || '';
    // this.heroesBorrados.push( heroeBorrado: string[] );
  }



}
