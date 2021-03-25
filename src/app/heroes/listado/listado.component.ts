import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America'];
  heroeborrado: string = '';
  

  /**
   * borrarHeroe
   */
  
  public borrarHeroe(): void {
    console.log('Borrando Héroe...');
    this.heroeborrado = this.heroes.shift() || '';
  }

}
