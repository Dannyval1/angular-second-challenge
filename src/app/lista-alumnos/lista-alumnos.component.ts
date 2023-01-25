import { Component, OnInit } from '@angular/core';
import { Alumno } from '../models/alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alumnos: Alumno[] = [
    {
      nombre: 'Danny',
      edad: 29,
      curso: 'Angular',
      valoracion: 2,
    },
    {
      nombre: 'Carlos',
      edad: 26,
      curso: 'React',
      valoracion: 3,
    },
    {
      nombre: 'Cristian',
      edad: 22,
      curso: 'Angular',
      valoracion: 5,
    },
    {
      nombre: 'Andres',
      edad: 52,
      curso: 'React',
      valoracion: 1,
    },
    {
      nombre: 'Olga',
      edad: 51,
      curso: 'React',
      valoracion: 2,
    },
    {
      nombre: 'Margoth',
      edad: 32,
      curso: 'React',
      valoracion: 4,
    },
    {
      nombre: 'Mandrake',
      edad: 24,
      curso: 'Angular',
      valoracion: 5,
    },
  ];

}
