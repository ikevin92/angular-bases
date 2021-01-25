
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule( {
    // importamos los componentes que pertenencen al modulo
    declarations: [
        ContadorComponent,
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule // se debe importar para usar directuvas como ngif ngfor
    ]

} )

export class ContadorModule {

}
