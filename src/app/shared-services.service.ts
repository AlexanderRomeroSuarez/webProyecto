import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {

  itemList: { nombre: string; checked: boolean }[] = [];

  addItem(newItem: { nombre: string; checked: boolean }) {
    this.itemList.push(newItem);
  }

  removeItem(index: number) {
    this.itemList.splice(index, 1);
  }
}
