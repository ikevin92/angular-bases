import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/dbz.interface';

@Component( {
    selector: 'app-personajes',
    templateUrl: './personajes.component.html',
} )
export class PersonajesComponent {

    // recibimos el parametro del componente padre
    //   @Input() personajes: Personaje[] = [];

    get personajes (): Personaje[] {
        return this.dbzService.personajes;
    }

    constructor ( private dbzService: DbzService ) {
    }

}
