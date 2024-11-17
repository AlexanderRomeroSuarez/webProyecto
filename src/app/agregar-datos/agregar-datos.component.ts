import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoguinComponent } from '../loguin/loguin.component';
import { SharedServicesService } from '../shared-services.service';

@Component({
  selector: 'app-agregar-datos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agregar-datos.component.html',
  styleUrl: './agregar-datos.component.scss'
})
export class AgregarDatosComponent implements  AfterViewInit {
  itemList: string[] = [];
  _formBuilder= inject(FormBuilder);
  _sharedService = inject(SharedServicesService)
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
      //this.itemList.push(newItemValue);
      this._sharedService.addItem({ nombre: newItemValue, checked: false });
      this.nombre="test01"
      this.formGroup.reset(); // Limpia el formulario después de agregar
    }
  }
}
