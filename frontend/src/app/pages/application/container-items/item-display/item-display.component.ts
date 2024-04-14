import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../../services/item';

@Component({
  selector: 'app-item-display',
  standalone: true,
  imports: [],
  templateUrl: './item-display.component.html',
  styleUrl: './item-display.component.css',
})
export class ItemDisplayComponent {
  @Input()
  public paramPost!: Item;

  @Output()
  emitterPostToRemove = new EventEmitter();

  @Output()
  emitterPostToEdit = new EventEmitter();

  removeItemEvent() {
    this.emitterPostToRemove.emit(this.paramPost);
  }

  editItemEvent() {
    this.emitterPostToEdit.emit(this.paramPost);
  }
}
