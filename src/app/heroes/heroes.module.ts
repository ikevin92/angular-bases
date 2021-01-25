
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule( {
    // importamos los componentes que pertenencen al modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule // se debe importar para usar directuvas como ngif ngfor
    ]

} )

export class HeroesModule {

}
