import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  filtro: string = '';
  cursos: Curso[] = [
    {
      nombre: 'Jorge', 
      comision: '393939', 
      profesor: {
        nombre: 'Jorge',
        correo: 'jorge@gmail.com',
        fechaRegistro: new Date(2021, 3, 12)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'Luis', 
      comision: '34423', 
      profesor: {
        nombre: 'Luis',
        correo: 'luis@gmail.com',
        fechaRegistro: new Date(2021, 3, 12)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    },
    {
      nombre: 'Piero', 
      comision: '549133', 
      profesor: {
        nombre: 'Piero',
        correo: 'piero@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 2, 1, 20, 30, 0),
      fechaFin: new Date(2023, 2, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'Ricardo', 
      comision: '49531', 
      profesor: {
        nombre: 'Ricardo',
        correo: 'ricardo@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 3, 1, 20, 30, 0),
      fechaFin: new Date(2023, 3, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'fechaInicio', 'fechaFin', 'inscripcionAbierta', 'acciones'];

  constructor(
    private dialog: MatDialog
  ){

  }

  abrirModal(curso: Curso){
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: curso
    });
  }
}
