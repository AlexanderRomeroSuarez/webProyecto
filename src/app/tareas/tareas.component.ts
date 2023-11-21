import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoguinComponent } from '../loguin/loguin.component';
import { SharedServicesService } from '../shared-services.service';
import { MostrarListaComponent } from "../mostrar-lista/mostrar-lista.component";
import { AgregarDatosComponent } from "../agregar-datos/agregar-datos.component";

@Component({
    selector: 'app-tareas',
    standalone: true,
    providers: [SharedServicesService],
    templateUrl: './tareas.component.html',
    styleUrl: './tareas.component.scss',
    imports: [CommonModule, ReactiveFormsModule,MostrarListaComponent, AgregarDatosComponent]
})
export class TareasComponent {
  /*itemList: string[] = [];
  _formBuilder= inject(FormBuilder);
  nombre!: string | undefined;
  @ViewChild(LoguinComponent) childComponent!: LoguinComponent;
  formGroup = this._formBuilder.nonNullable.group({
		tarea: ['', [Validators.required]]
	});

  get tarea (): FormControl<string | any>{ 
    return this.formGroup.controls.tarea;
  }

  addItem() {
    if (this.formGroup.valid) {
      const newItemValue = this.formGroup.get('tarea')!.value;
      this.itemList.push(newItemValue);
      console.log(this.itemList)
    this.nombre=  this.childComponent.userName;
    console.log( this.nombre)
      this.formGroup.reset(); // Limpia el formulario después de agregar
    }
  }*/
}
