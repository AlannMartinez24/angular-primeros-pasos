import { Component, Input, Output , EventEmitter} from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { name: "goku", power: 50 },
    { name: "vegeta", power: 100 }];

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string): void {
    if (!id) return;
    this.onDelete.emit(id);
  }
}
