import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-loguin',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './loguin.component.html',
  styleUrl: './loguin.component.scss'
})
export class LoguinComponent {
  title = 'webPage';

  _formBuilder= inject(FormBuilder);
  _errorMessage!: string;
  _route= inject(Router)

  
  formGroup = this._formBuilder.nonNullable.group({
		username: ['', [Validators.required]],
		password: ['', Validators.required]
	});

  get userName (){ return this.formGroup.get('username')?.value;}

  get password (){return this.formGroup.get('password')?.value;}

  ingresar(){
    if (this.formGroup.valid) {
      // Realizar la validación personalizada aquí
      if (this.customValidation(this.userName, this.password)) {
        console.log("sesión iniciadoa con éxito");
        this._route.navigate(['./tareas']);
      } else {
        this._errorMessage = 'Usuario o contraseña incorrectos';
      }
  }

}

  private customValidation(username: string | undefined, password: string |undefined): boolean {
    return username === 'test01' && password === 'test01';
  }

}


