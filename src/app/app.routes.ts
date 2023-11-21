import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas.component';
import { AppComponent } from './app.component';
import { LoguinComponent } from './loguin/loguin.component';
import { NgModule } from '@angular/core';

 export const routes: Routes = [
    { path: 'login', component: LoguinComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'tareas', component: TareasComponent },
];
