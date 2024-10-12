import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzServices {

  public characters: Character[] = [{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },{
    id: uuid(),
    name:'Goku',
    power:9500
  },{
    id: uuid(),
    name:'Vegeta',
    power:7500
  }];

  onNewCharacter(character: Character):void{
    const newCharacter = {id: uuid(), ...character}
    this.characters.push(newCharacter)
    //console.log('Main page');
    //console.log({character});
  }
/*
  onDeleteCharacter(index:number):void{
    this.characters.splice(index, 1);
  }
*/
  onDeleteCharacterById(id:string):void{
    this.characters = this.characters.filter(e => e.id !== id);
  }
}
