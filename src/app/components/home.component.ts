import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'
})

export class HomeComponent {
    public titulo: string;

    constructor() {
        this.titulo = 'Aguita de Coco';
    }

    ngOnInit() {
        //console.log('Se ha cargado el Componente Home');
    }
}
