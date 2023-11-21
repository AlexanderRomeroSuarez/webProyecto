import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServicesService } from '../shared-services.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mostrar-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mostrar-lista.component.html',
  styleUrl: './mostrar-lista.component.scss'
})
export class MostrarListaComponent {
  itemList: { nombre: string; checked: boolean }[] = [];

  constructor(public sharedService: SharedServicesService) {}

  eliminarItem(index: number) {
    this.sharedService.removeItem(index);
  }
}
