import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    // tslint:disable-next-line: variable-name
    private _personajes: Personaje[] = [
        {
            nombre: 'Thrunks',
            poder: 1650
        },
        {
            nombre: 'Piccolo',
            poder: 5660
        }
    ];

    get personajes (): Personaje[] {
        return [ ...this._personajes ];
    }



    constructor () {

    }

    agregarPersonaje ( personaje: Personaje ): void {
        this._personajes.push( personaje );
    }

}
