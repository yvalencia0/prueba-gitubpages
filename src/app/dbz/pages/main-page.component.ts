import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzServices } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzServices: DbzServices){

  }

  get characters(): Character[]{
    return [...this.dbzServices.characters];
  }

  onDeleteCaracter(id:string):void{
   this.dbzServices.onDeleteCharacterById(id)
  }

  onNewCharacter(character: Character):void{
    this.dbzServices.onNewCharacter(character)
  }
}
